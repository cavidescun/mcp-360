// src/apiClient.ts
import axios from 'axios';

/**
 * Cliente API singleton para MCP 360
 * Maneja todas las comunicaciones con la API del sistema educativo
 */
export class ApiClient {
  private static instance: ApiClient;
  private apiUrl: string;
  private apiKey: string;
  private bearerToken: string;

  private constructor() {
    // Obtener credenciales desde variables de entorno
    this.apiUrl = process.env.API_HOST || '';
    this.apiKey = process.env.API_KEY || '';
    this.bearerToken = process.env.BEARER_TOKEN || '';

    // Verificar que las variables de entorno estén configuradas
    if (!this.apiUrl) {
      console.warn('⚠️ ADVERTENCIA: Variable de entorno API_HOST no configurada');
    }
    if (!this.apiKey && !this.bearerToken) {
      console.warn('⚠️ ADVERTENCIA: Variables de entorno API_KEY o BEARER_TOKEN no configuradas');
    }
  }

  /**
   * Patrón Singleton para asegurar una sola instancia
   */
  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  /**
   * Método principal para realizar peticiones a la API
   * @param method Método HTTP (get, post, put, delete, patch)
   * @param endpoint Endpoint de la API (sin el host base)
   * @param data Datos para enviar en el cuerpo de la petición
   * @param customUrl URL personalizada (opcional)
   * @param customToken Token personalizado (opcional)
   * @param contentType Tipo de contenido (por defecto application/json)
   * @returns Respuesta de la API
   */
  public async request(
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    endpoint: string,
    data?: Record<string, any> | string | FormData,
    customUrl?: string,
    customToken?: string,
    contentType: string = 'application/json'
  ): Promise<any> {
    // Usar credenciales personalizadas si se proporcionan, sino usar las del entorno
    const baseUrl = (customUrl || this.apiUrl).replace(/\/+$/, '');
    const url = `${baseUrl}/${endpoint.replace(/^\/+/, '')}`;
    const token = customToken || this.bearerToken;

    // Verificar que las credenciales estén disponibles
    if (!baseUrl) {
      throw new Error(
        'URL de la API no configurada. ' +
        'Configura la variable de entorno API_HOST, ' +
        'o proporciona la URL como parámetro.'
      );
    }

    // Configurar headers según la API
    const headers: Record<string, string> = {};
    
    // Solo agregar Content-Type si no es FormData
    if (!(data instanceof FormData)) {
      headers['Content-Type'] = contentType;
    }
    
    // Agregar token de autorización si está disponible
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    } else if (this.apiKey) {
      // Alternativa con API Key si no hay Bearer token
      headers['X-API-Key'] = this.apiKey;
    }
    
    try {
      let response;
      
      const config = { 
        headers,
        // Configuración adicional para manejar PDFs y archivos binarios
        responseType: endpoint.includes('generate-pdf') ? 'arraybuffer' : 'json'
      } as any;

      switch (method.toLowerCase()) {
        case 'get':
          response = await axios.get(url, config);
          break;
        case 'post':
          response = await axios.post(url, data, config);
          break;
        case 'put':
          response = await axios.put(url, data, config);
          break;
        case 'patch':
          response = await axios.patch(url, data, config);
          break;
        case 'delete':
          response = await axios.delete(url, config);
          break;
        default:
          throw new Error(`Método HTTP no soportado: ${method}`);
      }
      
      // Manejar respuestas de archivos binarios (PDFs)
      if (config.responseType === 'arraybuffer') {
        return {
          data: response.data,
          contentType: response.headers['content-type'],
          fileName: this.extractFileNameFromHeaders(response.headers)
        };
      }
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 
                           JSON.stringify(error.response?.data) || 
                           error.message;
        throw new Error(`Error de API: ${error.response?.status} - ${errorMessage}`);
      } else {
        throw new Error(`Error de conexión: ${error}`);
      }
    }
  }

  /**
   * Método especializado para hacer login y obtener token
   * @param username Nombre de usuario
   * @param password Contraseña
   * @returns Token de acceso y datos del usuario
   */
  public async login(username: string, password: string): Promise<any> {
    const loginData = {
      username,
      password
    };

    const response = await this.request('post', '/api/v1/auth/login', loginData);
    
    // Actualizar el token interno si el login es exitoso
    if (response.access_token) {
      this.bearerToken = response.access_token;
    }
    
    return response;
  }

  /**
   * Extrae el nombre del archivo desde los headers de respuesta
   * @param headers Headers de la respuesta HTTP
   * @returns Nombre del archivo o nombre por defecto
   */
  private extractFileNameFromHeaders(headers: any): string {
    const contentDisposition = headers['content-disposition'];
    if (contentDisposition) {
      const match = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
      if (match && match[1]) {
        return match[1].replace(/['"]/g, '');
      }
    }
    return 'archivo.pdf';
  }

  /**
   * Método para validar la conexión con la API
   * @returns true si la conexión es exitosa
   */
  public async testConnection(): Promise<boolean> {
    try {
      // Intentar hacer una petición simple para verificar conectividad
      await axios.get(`${this.apiUrl}/health`, { timeout: 5000 });
      return true;
    } catch (error) {
      console.error('Error al probar conexión con la API:', error);
      return false;
    }
  }

  /**
   * Getter para obtener la URL base configurada
   */
  public getBaseUrl(): string {
    return this.apiUrl;
  }

  /**
   * Método para actualizar el token de autorización
   * @param newToken Nuevo token de autorización
   */
  public updateToken(newToken: string): void {
    this.bearerToken = newToken;
  }
}

// Exportar una instancia singleton
export const apiClient = ApiClient.getInstance();