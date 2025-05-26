// src/tools/ConsultarEstudiantePorDocumento.ts
import { z } from "zod";
import { apiClient } from "../apiClient.js";
import { TypeHelper } from "../helpers/TypeHelper.js";

/**
 * Herramienta para consultar información de un estudiante activo por documento
 * Endpoint: POST /api/v1/student/active-student-by-document
 */
export default {
  name: "consultar_estudiante_por_documento",
  description: "Permite consultar información detallada de un estudiante activo usando el tipo y número de documento.",
  
  schema: z.object({
    identificationType: z.string().describe("Tipo de documento (C, P, E, T, PPT)"),
    identificationNumber: z.string().describe("Número de identificación del estudiante")
  }),

  async execute(args: { identificationType: string; identificationNumber: string }) {
    try {
      // Validar datos de entrada
      if (!args.identificationType || !args.identificationNumber) {
        throw new Error("Los campos 'identificationType' e 'identificationNumber' son obligatorios");
      }

      // Validar formato del tipo de documento
      if (!TypeHelper.validateDocumentType(args.identificationType)) {
        throw new Error("Tipo de documento inválido. Valores permitidos: C, CC, P, PAS, E, CE, T, TI, PPT");
      }

      // Validar formato del número de documento
      if (!TypeHelper.validateDocumentNumber(args.identificationNumber)) {
        throw new Error("Número de documento inválido. Debe contener solo números y tener entre 6 y 15 dígitos");
      }

      // Preparar datos para la petición
      const requestData = {
        identificationType: args.identificationType.toUpperCase(),
        identificationNumber: args.identificationNumber.trim()
      };

      console.log(`🔍 Consultando estudiante: ${requestData.identificationType} ${requestData.identificationNumber}`);

      // Realizar la petición a la API
      const response = await apiClient.request(
        'post',
        '/api/v1/student/active-student-by-document',
        requestData
      );

      console.log(`✅ Estudiante encontrado: ${response.name} ${response.lastname}`);

      return {
        success: true,
        message: "Información del estudiante obtenida exitosamente",
        data: {
          identificationNumber: response.identificationNumber,
          identificationType: response.identificationType,
          name: response.name,
          lastname: response.lastname,
          email: response.email,
          mobilePhoneNumber: response.mobilePhoneNumber,
          userType: response.userType
        }
      };

    } catch (error) {
      console.error(`❌ Error consultando estudiante:`, error);
      
      if (error instanceof Error) {
        if (error.message.includes('404')) {
          return {
            success: false,
            error: "No se encontró ningún estudiante activo con las credenciales proporcionadas",
            statusCode: 404
          };
        } else if (error.message.includes('401')) {
          return {
            success: false,
            error: "No autorizado. Verifica tu token de acceso",
            statusCode: 401
          };
        } else {
          return {
            success: false,
            error: error.message,
            statusCode: 500
          };
        }
      }

      return {
        success: false,
        error: "Error desconocido al consultar el estudiante",
        statusCode: 500
      };
    }
  }
};