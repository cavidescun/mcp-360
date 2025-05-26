// src/tools/IniciarSesion.ts
import { z } from "zod";
import { apiClient } from "../apiClient.js";
import { TypeHelper } from "../helpers/TypeHelper.js";
/**
 * Herramienta para inicio de sesión en el sistema APP 360
 * Endpoint: POST /api/v1/auth/login
 */
export default {
    name: "iniciar_sesion",
    description: "Permite a los usuarios iniciar sesión utilizando sus credenciales. El sistema valida las credenciales contra la base de datos SQL Server y devuelve un token de acceso junto con información del usuario.",
    schema: z.object({
        username: z.string().describe("Nombre de usuario para el inicio de sesión"),
        password: z.string().describe("Contraseña del usuario")
    }),
    async execute(args) {
        try {
            // Validar que los campos requeridos estén presentes
            if (!args.username || !args.password) {
                throw new Error("Los campos 'username' y 'password' son obligatorios");
            }
            // Sanitizar los datos de entrada
            const loginData = {
                username: TypeHelper.sanitizeString(args.username),
                password: args.password // No sanitizar la contraseña para preservar caracteres especiales
            };
            console.log(`🔐 Iniciando sesión para usuario: ${loginData.username}`);
            // Realizar la petición de login
            const response = await apiClient.request('post', '/api/v1/auth/login', loginData);
            // Verificar que la respuesta contenga los datos esperados
            if (!response.access_token) {
                throw new Error("Respuesta de login inválida: falta el token de acceso");
            }
            console.log(`✅ Inicio de sesión exitoso para usuario: ${response.username}`);
            return {
                success: true,
                message: "Inicio de sesión exitoso",
                data: {
                    id: response.id,
                    username: response.username,
                    access_token: response.access_token
                }
            };
        }
        catch (error) {
            console.error(`❌ Error en inicio de sesión:`, error);
            // Manejar diferentes tipos de errores
            if (error instanceof Error) {
                if (error.message.includes('401')) {
                    return {
                        success: false,
                        error: "Credenciales incorrectas. Verifica tu nombre de usuario y contraseña.",
                        statusCode: 401
                    };
                }
                else if (error.message.includes('404')) {
                    return {
                        success: false,
                        error: "Usuario no encontrado en el sistema.",
                        statusCode: 404
                    };
                }
                else {
                    return {
                        success: false,
                        error: error.message,
                        statusCode: 500
                    };
                }
            }
            return {
                success: false,
                error: "Error desconocido durante el inicio de sesión",
                statusCode: 500
            };
        }
    }
};
