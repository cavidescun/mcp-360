// src/helpers/TypeHelper.ts

/**
 * Clase helper para conversión de tipos de datos
 * Útil para transformar entradas de strings a tipos específicos requeridos por la API
 */
export class TypeHelper {
  /**
   * Convierte valores string a number en campos numéricos especificados
   * @param input Objeto de entrada con posibles valores string que deberían ser números
   * @param numericFields Lista de campos que deberían ser números
   * @returns Objeto con valores convertidos
   */
  static convertStringToNumber(
    input: Record<string, any>,
    numericFields: string[] = []
  ): Record<string, any> {
    const result = { ...input };
    
    // Convertir campos string a number si es necesario
    for (const field of numericFields) {
      if (typeof result[field] === 'string' && result[field] !== '') {
        const numValue = Number(result[field]);
        if (!isNaN(numValue)) {
          result[field] = numValue;
        }
      }
    }
    
    return result;
  }
  
  /**
   * Convierte valores string a boolean en campos booleanos especificados
   * @param input Objeto de entrada con posibles valores string que deberían ser booleanos
   * @param booleanFields Lista de campos que deberían ser booleanos
   * @returns Objeto con valores convertidos
   */
  static convertStringToBoolean(
    input: Record<string, any>,
    booleanFields: string[] = []
  ): Record<string, any> {
    const result = { ...input };
    
    // Convertir campos string a boolean si es necesario
    for (const field of booleanFields) {
      if (typeof result[field] === 'string') {
        const value = result[field].toLowerCase();
        if (value === 'true' || value === 'yes' || value === 'y' || value === '1') {
          result[field] = true;
        } else if (value === 'false' || value === 'no' || value === 'n' || value === '0') {
          result[field] = false;
        }
      }
    }
    
    return result;
  }
  
  /**
   * Convierte valores string a Date en campos de fecha especificados
   * @param input Objeto de entrada con posibles valores string que deberían ser fechas
   * @param dateFields Lista de campos que deberían ser fechas
   * @returns Objeto con valores convertidos
   */
  static convertStringToDate(
    input: Record<string, any>,
    dateFields: string[] = []
  ): Record<string, any> {
    const result = { ...input };
    
    // Convertir campos string a Date si es necesario
    for (const field of dateFields) {
      if (typeof result[field] === 'string' && result[field] !== '') {
        try {
          result[field] = new Date(result[field]);
        } catch (error) {
          console.warn(`No se pudo convertir ${field} a fecha: ${result[field]}`);
        }
      }
    }
    
    return result;
  }

  /**
   * Limpia y valida datos de entrada según el esquema especificado
   * @param input Datos de entrada
   * @param schema Esquema de validación con tipos esperados
   * @returns Datos limpios y validados
   */
  static validateAndClean(
    input: Record<string, any>,
    schema: Record<string, string>
  ): Record<string, any> {
    const result: Record<string, any> = {};
    
    for (const [field, expectedType] of Object.entries(schema)) {
      if (input[field] !== undefined && input[field] !== null) {
        switch (expectedType) {
          case 'string':
            result[field] = String(input[field]).trim();
            break;
          case 'number':
            const numValue = Number(input[field]);
            if (!isNaN(numValue)) {
              result[field] = numValue;
            }
            break;
          case 'boolean':
            if (typeof input[field] === 'boolean') {
              result[field] = input[field];
            } else {
              const strValue = String(input[field]).toLowerCase();
              result[field] = strValue === 'true' || strValue === '1' || strValue === 'yes';
            }
            break;
          case 'date':
            try {
              result[field] = new Date(input[field]);
            } catch {
              // Si no se puede convertir, mantener el valor original
              result[field] = input[field];
            }
            break;
          default:
            result[field] = input[field];
        }
      }
    }
    
    return result;
  }

  /**
   * Formatea fechas en el formato requerido por la API (DD/MM/YYYY)
   * @param date Fecha a formatear
   * @returns Fecha formateada como string
   */
  static formatDateForAPI(date: Date | string): string {
    let dateObj: Date;
    
    if (typeof date === 'string') {
      dateObj = new Date(date);
    } else {
      dateObj = date;
    }
    
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();
    
    return `${day}/${month}/${year}`;
  }

  /**
   * Valida el formato de un tipo de documento
   * @param documentType Tipo de documento a validar
   * @returns true si el formato es válido
   */
  static validateDocumentType(documentType: string): boolean {
    const validTypes = ['C', 'CC', 'P', 'PAS', 'E', 'CE', 'T', 'TI', 'PPT'];
    return validTypes.includes(documentType.toUpperCase());
  }

  /**
   * Valida el formato de un número de documento
   * @param documentNumber Número de documento a validar
   * @returns true si el formato es válido
   */
  static validateDocumentNumber(documentNumber: string | number): boolean {
    const numStr = String(documentNumber);
    return /^\d+$/.test(numStr) && numStr.length >= 6 && numStr.length <= 15;
  }

  /**
   * Valida el formato de un correo electrónico
   * @param email Correo electrónico a validar
   * @returns true si el formato es válido
   */
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Valida el formato de un número de teléfono colombiano
   * @param phone Número de teléfono a validar
   * @returns true si el formato es válido
   */
  static validateColombianPhone(phone: string): boolean {
    const phoneRegex = /^(\+57|57)?[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  /**
   * Convierte un valor de referencia a número entero
   * @param reference Valor de referencia
   * @returns Número entero o error si no es válido
   */
  static parseReference(reference: string | number): number {
    const num = Number(reference);
    if (isNaN(num) || !Number.isInteger(num)) {
      throw new Error(`Referencia inválida: ${reference}. Debe ser un número entero.`);
    }
    return num;
  }

  /**
   * Sanitiza strings para prevenir inyección de código
   * @param input String de entrada
   * @returns String sanitizado
   */
  static sanitizeString(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remover brackets HTML
      .replace(/['"]/g, '') // Remover comillas
      .trim(); // Quitar espacios al inicio y final
  }
}