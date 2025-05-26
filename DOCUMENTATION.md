# 📚 DOCUMENTATION.md - MCP 360

## 🎯 Descripción del Proyecto

**MCP 360** es un servidor de protocolo de contexto de modelo (MCP) que proporciona acceso completo a la API del sistema educativo APP 360. Este proyecto permite la gestión integral de procesos financieros, académicos y administrativos para instituciones educativas.

### 🏢 Sistema Base
- **API:** APP 360 - Gestión de procesos del módulo financiero
- **Funciones principales:** Generar recibos de cesantías, proceso CLTIENE, gestión académica
- **Arquitectura:** REST API con autenticación JWT Bearer

## 🛠️ Herramientas Implementadas (40 total)

### 🔐 Autenticación (1 herramienta)

#### 1. `iniciar_sesion`
- **Endpoint:** `POST /api/v1/auth/login`
- **Descripción:** Permite a los usuarios iniciar sesión utilizando sus credenciales
- **Parámetros:**
  - `username` (string): Nombre de usuario
  - `password` (string): Contraseña del usuario
- **Respuesta:** Token de acceso JWT y datos del usuario

---

### 🎓 Departamento Académico (6 herramientas)

#### 2. `consultar_estudiante_por_documento`
- **Endpoint:** `POST /api/v1/student/active-student-by-document`
- **Descripción:** Consulta información detallada de un estudiante activo por documento
- **Parámetros:**
  - `identificationType` (string): Tipo de documento (C, P, E, T, PPT)
  - `identificationNumber` (string): Número de identificación
- **Respuesta:** Información completa del estudiante

#### 3. `consultar_estudiante_por_email`
- **Endpoint:** `GET /api/v1/student/active-student-by-email/{email}`
- **Descripción:** Obtiene información de un estudiante activo por correo electrónico
- **Parámetros:**
  - `email` (string): Correo electrónico del estudiante
- **Respuesta:** Datos del estudiante asociado al correo

#### 4. `obtener_ordenes_matricula`
- **Endpoint:** `POST /api/v1/student/enrollment-orders`
- **Descripción:** Devuelve las órdenes de matrícula activas de un estudiante
- **Parámetros:**
  - `identificationType` (string): Tipo de documento
  - `identificationNumber` (string): Número de identificación
- **Respuesta:** Lista de órdenes de matrícula activas

#### 5. `obtener_programas_estudiante`
- **Endpoint:** `POST /api/v1/student/student-programs`
- **Descripción:** Lista los programas académicos en los que está inscrito el estudiante
- **Parámetros:**
  - `identificationType` (string): Tipo de documento
  - `identificationNumber` (string): Número de identificación
- **Respuesta:** Programas académicos asociados

#### 6. `validar_estudiante_antiguo`
- **Endpoint:** `POST /api/v1/student/is-older-student`
- **Descripción:** Valida si un estudiante es antiguo o nuevo (TRUE = antiguo, FALSE = nuevo)
- **Parámetros:**
  - `identificationType` (string): Tipo de documento (CC, PAS, CE, TI, PPT)
  - `identificationNumber` (string): Número de identificación
- **Respuesta:** Booleano indicando si es estudiante antiguo

#### 7. `obtener_horario_clases`
- **Endpoint:** `POST /api/v1/student/class-schedule`
- **Descripción:** Obtiene el horario de clases (presencial/virtual) de un estudiante
- **Parámetros:**
  - `identificationNumber` (string): Número de identificación
  - `studentProgramId` (number): ID del programa del estudiante
  - `activePeriod` (string): Periodo académico activo
- **Respuesta:** Horario completo de clases del estudiante

---

### 📊 Dashboard Académico (5 herramientas)

#### 8. `obtener_resumen_carrera`
- **Endpoint:** `POST /api/v1/student/dashboard/career-overview`
- **Descripción:** Devuelve el porcentaje de progreso en la carrera del estudiante
- **Parámetros:**
  - `identificationNumber` (string): Número de identificación
  - `studentProgramId` (number): ID del programa del estudiante
- **Respuesta:** Porcentaje de carrera completado y nombre del programa

#### 9. `obtener_promedio_acumulado`
- **Endpoint:** `POST /api/v1/student/dashboard/cumulative-average`
- **Descripción:** Calcula el promedio acumulado por cada periodo cursado
- **Parámetros:**
  - `identificationNumber` (string): Número de identificación
  - `studentProgramId` (number): ID del programa del estudiante
- **Respuesta:** Lista de promedios acumulados por periodo

#### 10. `consultar_notas_estudiante`
- **Endpoint:** `POST /api/v1/student/dashboard/academic-record`
- **Descripción:** Obtiene el récord académico completo del estudiante
- **Parámetros:**
  - `identificationNumber` (string): Número de identificación
  - `studentProgramId` (number): ID del programa del estudiante
- **Respuesta:** Historial académico con calificaciones y estado de materias

#### 11. `subir_banner_publicitario`
- **Endpoint:** `POST /api/v1/dashboard/upload-advertising-banner`
- **Descripción:** Guarda imágenes del banner 360 en bucket de S3
- **Parámetros:**
  - `imagePlatform` (string): Plataforma (mobile o web)
  - `file` (binary): Archivo de imagen o GIF
  - `redirectUrl` (string, opcional): URL de redirección
- **Respuesta:** Confirmación de subida exitosa

#### 12. `consultar_banners_publicitarios`
- **Endpoint:** `GET /api/v1/dashboard/{imagePlatform}`
- **Descripción:** Obtiene imágenes del banner 360 desde S3
- **Parámetros:**
  - `imagePlatform` (string): Plataforma (mobile o web)
- **Respuesta:** Lista de banners con URLs y links de redirección

---

### 💰 Departamento Financiero (9 herramientas)

#### 13. `generar_pdf_cesantias`
- **Endpoint:** `POST /api/v1/reverance-pay/generate-pdf`
- **Descripción:** Genera PDF del recibo de cesantías para pagos bancarios
- **Parámetros:**
  - `promotionType` (string): Nombre de la promoción
  - `orderDocument` (string): Documento de la orden (ej: FAMA)
  - `orderNumber` (number): Número de la orden
  - `valueToPay` (number): Valor a pagar
- **Respuesta:** Archivo PDF del recibo de cesantías

#### 14. `generar_pdf_deuda_cesantias`
- **Endpoint:** `POST /api/v1/reverance-pay/generate-debt-pdf`
- **Descripción:** Genera PDF del recibo de cesantías para deudas
- **Parámetros:**
  - `promotionType` (string): Nombre de la promoción
  - `academicPeriod` (string): Periodo académico
  - `valueToPay` (number): Valor a pagar
  - `documentNumber` (string): Número de documento
  - `dateToPay` (string): Fecha límite de pago
- **Respuesta:** Archivo PDF del recibo de deuda

#### 15. `consultar_transaccion_pago`
- **Endpoint:** `GET /api/v1/checkout/payment-transaction/{reference}`
- **Descripción:** Obtiene detalles de una transacción de pago específica
- **Parámetros:**
  - `reference` (number): Referencia numérica de la transacción
- **Respuesta:** Detalles completos de la transacción

#### 16. `obtener_todas_transacciones`
- **Endpoint:** `POST /api/v1/checkout/all-payment-transactions`
- **Descripción:** Lista todas las transacciones de pago del estudiante
- **Parámetros:**
  - `identificationType` (string): Tipo de documento
  - `identificationNumber` (number): Número de identificación
  - `transactionSource` (string): Origen (360 o Venta Directa)
- **Respuesta:** Lista de transacciones relacionadas

#### 17. `procesar_activar_pagos`
- **Endpoint:** `POST /api/v1/checkout/process-and-activate-payments`
- **Descripción:** Procesa y activa pagos de CtAyuda mediante procedimiento almacenado
- **Parámetros:**
  - `reference` (number): Referencia del pago
  - `sequence` (number): Número consecutivo del pago
- **Respuesta:** Confirmación de procesamiento (204 No Content)

#### 18. `crear_transaccion_pasarela`
- **Endpoint:** `POST /api/v1/payment-gateway/create-transaction`
- **Descripción:** Crea una transacción en la pasarela Place To Pay
- **Parámetros:** Objeto complejo con datos del comprador, pago, IP, etc.
- **Respuesta:** URL de procesamiento y ID de solicitud

#### 19. `consultar_transaccion_pasarela`
- **Endpoint:** `GET /api/v1/payment-gateway/find-transaction/{reference}`
- **Descripción:** Consulta el estado de una transacción en Place To Pay
- **Parámetros:**
  - `reference` (number): Referencia de la transacción
- **Respuesta:** Estado y detalles de la transacción

#### 20. `obtener_detalle_deuda_estudiantil`
- **Endpoint:** `POST /api/v1/treasury/find-student-debt-detail`
- **Descripción:** Obtiene detalles de la deuda de un estudiante específico
- **Parámetros:**
  - `identificationType` (string): Tipo de documento
  - `identificationNumber` (string): Número de identificación
- **Respuesta:** Detalles completos de la deuda estudiantil

#### 21. `consultar_deuda_por_ciclo`
- **Endpoint:** `GET /api/v1/treasury/cycle-debt/{identificationNumber}`
- **Descripción:** Obtiene información de deuda por ciclo académico
- **Parámetros:**
  - `identificationNumber` (number): Número de identificación
- **Respuesta:** Información de deuda relacionada al ciclo académico

---

### 🏦 Departamento Fintech (11 herramientas)

#### 22. `obtener_solicitudes_pendientes_ctayuda`
- **Endpoint:** `POST /api/v1/fintech/pending-financing`
- **Descripción:** Recupera solicitudes de crédito CtAyuda pendientes de desembolso
- **Parámetros:**
  - `identificationType` (string): Tipo de documento
  - `identificationNumber` (string): Número de identificación
- **Respuesta:** Última solicitud de crédito pendiente

#### 23. `guardar_datos_desembolso_credito`
- **Endpoint:** `POST /api/v1/fintech/save-core-credit-data`
- **Descripción:** Registra valores del desembolso de crédito CtAyuda
- **Parámetros:** Objeto complejo con datos del estudiante, codeudor y detalles del crédito
- **Respuesta:** Confirmación del registro

#### 24. `buscar_creditos_estudiante`
- **Endpoint:** `POST /api/v1/fintech/find-credits`
- **Descripción:** Obtiene todos los créditos asociados a un estudiante
- **Parámetros:**
  - `identificationType` (string): Tipo de documento
  - `identificationNumber` (string): Número de identificación
- **Respuesta:** Lista completa de créditos (todos los estados)

#### 25. `guardar_informacion_credito`
- **Endpoint:** `POST /api/v1/fintech/save-credit`
- **Descripción:** Crea registro inicial del crédito después del pago
- **Parámetros:** Objeto con todos los datos del crédito inicial
- **Respuesta:** Lista de créditos actualizada

#### 26. `obtener_valores_porcentuales_financiar`
- **Endpoint:** `POST /api/v1/fintech/percent-fintech-values`
- **Descripción:** Calcula valores porcentuales para simulación de crédito
- **Parámetros:** Datos del estudiante y tipo de financiación
- **Respuesta:** Porcentajes y valores calculados

#### 27. `calcular_costos_credito`
- **Endpoint:** `POST /api/v1/fintech/credit-cost-calculation`
- **Descripción:** Calcula costos de crédito usando procedimiento almacenado Oracle
- **Parámetros:** Datos para cálculo de costos
- **Respuesta:** Costos calculados y referencia de pago

#### 28. `guardar_historial_costos_credito`
- **Endpoint:** `POST /api/v1/fintech/save-credit-cost-history`
- **Descripción:** Registra historial de costos calculados en el simulador
- **Parámetros:** Datos del historial de costos
- **Respuesta:** Confirmación del registro

#### 29. `consultar_historial_costos_credito`
- **Endpoint:** `GET /api/v1/fintech/find-credit-cost-history/{reference}`
- **Descripción:** Recupera historial de costos para una referencia específica
- **Parámetros:**
  - `reference` (number): Referencia del crédito
- **Respuesta:** Detalles del historial de costos

#### 30. `actualizar_valores_credito`
- **Endpoint:** `PATCH /api/v1/fintech/credit-values/{reference}`
- **Descripción:** Actualiza valores de crédito basado en referencia existente
- **Parámetros:**
  - `reference` (number): Referencia del crédito
  - `requestId` (number): ID de la solicitud a actualizar
- **Respuesta:** Confirmación de actualización

#### 31. `buscar_detalles_core_credito`
- **Endpoint:** `GET /api/v1/fintech/find-credit-core-detail/{reference}`
- **Descripción:** Recupera valores de créditos desembolsados por el proveedor
- **Parámetros:**
  - `reference` (number): Referencia del crédito
- **Respuesta:** Detalles del núcleo central del crédito

#### 32. `obtener_parametros_credito_extraordinario`
- **Endpoint:** `POST /api/v1/fintech/find-extraordinary-credit-parameters`
- **Descripción:** Busca parámetros para financiación extraordinaria CtAyuda
- **Parámetros:**
  - `identificationNumber` (string): Número de identificación
  - `orderNumber` (number): Número de orden
- **Respuesta:** Parámetros de crédito extraordinario

---

### 🤝 Zoho | Fintech (2 herramientas)

#### 33. `crear_representante_ventas`
- **Endpoint:** `POST /api/v1/fintech/student-sales-representative`
- **Descripción:** Crea un nuevo representante de ventas para un estudiante
- **Parámetros:** Objeto completo con datos del representante y estudiante
- **Respuesta:** Confirmación del registro

#### 34. `actualizar_representante_ventas`
- **Endpoint:** `PUT /api/v1/fintech/student-sales-representative/{phaseId}`
- **Descripción:** Actualiza datos del representante de ventas por ID de fase
- **Parámetros:**
  - `phaseId` (string): ID de la fase de la transacción
  - Objeto con nuevos datos del representante
- **Respuesta:** Confirmación de actualización

---

### ℹ️ Información (1 herramienta)

#### 35. `obtener_enlaces_interes`
- **Endpoint:** `GET /api/v1/information/links-of-interest`
- **Descripción:** Obtiene lista de enlaces de interés para estudiantes activos
- **Parámetros:** Ninguno (requiere autenticación)
- **Respuesta:** Lista de enlaces con títulos, descripciones e iconos

---

## 🔧 Variables de Entorno Requeridas

### Configuración en el Cliente MCP

```json
{
  "mcp-360": {
    "command": "node",
    "args": [
      "/ruta/absoluta/a/mcp-360/dist/index.js"
    ],
    "transportType": "stdio",
    "autoApprove": [
      "iniciar_sesion",
      "consultar_estudiante_por_documento",
      "consultar_estudiante_por_email",
      "obtener_ordenes_matricula",
      "obtener_programas_estudiante",
      "validar_estudiante_antiguo",
      "obtener_horario_clases",
      "obtener_resumen_carrera",
      "obtener_promedio_acumulado",
      "consultar_notas_estudiante",
      "subir_banner_publicitario",
      "consultar_banners_publicitarios",
      "generar_pdf_cesantias",
      "generar_pdf_deuda_cesantias",
      "consultar_transaccion_pago",
      "obtener_todas_transacciones",
      "procesar_activar_pagos",
      "crear_transaccion_pasarela",
      "consultar_transaccion_pasarela",
      "obtener_detalle_deuda_estudiantil",
      "consultar_deuda_por_ciclo",
      "obtener_solicitudes_pendientes_ctayuda",
      "guardar_datos_desembolso_credito",
      "buscar_creditos_estudiante",
      "guardar_informacion_credito",
      "obtener_valores_porcentuales_financiar",
      "calcular_costos_credito",
      "guardar_historial_costos_credito",
      "consultar_historial_costos_credito",
      "actualizar_valores_credito",
      "buscar_detalles_core_credito",
      "obtener_parametros_credito_extraordinario",
      "crear_representante_ventas",
      "actualizar_representante_ventas",
      "obtener_enlaces_interes"
    ],
    "env": {
      "API_HOST": "https://tu-servidor-api.com",
      "API_KEY": "tu-clave-api-opcional",
      "BEARER_TOKEN": "tu-token-jwt-bearer"
    }
  }
}
```

### Variables de Entorno Explicadas

| Variable | Descripción | Ejemplo | Requerido |
|----------|-------------|---------|-----------|
| `API_HOST` | URL base de la API APP 360 | `https://api.app360.edu.co` | ✅ Sí |
| `API_KEY` | Clave de API (alternativa al Bearer) | `abc123def456` | ❌ Opcional |
| `BEARER_TOKEN` | Token JWT para autenticación | `eyJhbGciOiJIUzI1NiIs...` | ✅ Sí* |

*Nota: Se requiere al menos `BEARER_TOKEN` o `API_KEY` para la autenticación.

---

## 📋 Ejemplos de Uso

### 1. Inicio de Sesión
```typescript
// Obtener token de acceso
const resultado = await iniciar_sesion({
  username: "usuario360",
  password: "contraseñaSegura"
});

// Respuesta esperada:
{
  "success": true,
  "message": "Inicio de sesión exitoso",
  "data": {
    "id": 1,
    "username": "usuario360",
    "access_token": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

### 2. Consultar Estudiante
```typescript
// Buscar información de un estudiante
const estudiante = await consultar_estudiante_por_documento({
  identificationType: "C",
  identificationNumber: "1012345678"
});

// Respuesta esperada:
{
  "success": true,
  "message": "Información del estudiante obtenida exitosamente",
  "data": {
    "identificationNumber": "1012345678",
    "identificationType": "C",
    "name": "Juan Carlos",
    "lastname": "Pérez González",
    "email": "juan.perez@cun.edu.co",
    "mobilePhoneNumber": "3201234567",
    "userType": "Estudiante"
  }
}
```

### 3. Generar PDF de Cesantías
```typescript
// Generar recibo de cesantías
const pdf = await generar_pdf_cesantias({
  promotionType: "PROMOCIÓN ESPECIAL 2024",
  orderDocument: "FAMA",
  orderNumber: 2109653,
  valueToPay: 1200000.25
});

// Respuesta esperada:
{
  "success": true,
  "message": "PDF de cesantías generado exitosamente",
  "data": {
    "fileName": "recibo_cesantias.pdf",
    "contentType": "application/pdf",
    "size": 245760,
    "orderNumber": 2109653,
    "valueToPay": 1200000.25,
    "note": "El archivo PDF ha sido generado. Guárdalo para realizar el pago en el banco."
  }
}
```

### 4. Buscar Créditos del Estudiante
```typescript
// Obtener todos los créditos CtAyuda
const creditos = await buscar_creditos_estudiante({
  identificationType: "C",
  identificationNumber: "1012345678"
});

// Respuesta esperada:
{
  "success": true,
  "message": "Se encontraron 2 crédito(s) CtAyuda asociados al estudiante",
  "data": {
    "totalCredits": 2,
    "credits": [...],
    "summary": {
      "totalFinancingAmount": 3500000,
      "totalAmountPaid": 1200000,
      "activeCredits": 1,
      "approvedPayments": 2
    }
  }
}
```

---

## 🚀 Casos de Uso Principales

### 🎓 Gestión Académica
1. **Consulta de Estudiantes**: Buscar información por documento o email
2. **Órdenes de Matrícula**: Obtener órdenes activas para procesos de pago
3. **Programas Académicos**: Consultar programas en los que está inscrito
4. **Horarios**: Obtener cronogramas de clases presenciales y virtuales
5. **Récord Académico**: Consultar notas y progreso académico

### 💰 Gestión Financiera
1. **Recibos de Cesantías**: Generar PDFs para pagos bancarios
2. **Gestión de Deudas**: Consultar y generar recibos de deudas estudiantiles
3. **Transacciones**: Consultar y procesar pagos realizados
4. **Pasarela de Pagos**: Integración con Place To Pay

### 🏦 Gestión de Créditos CtAyuda
1. **Simulador de Créditos**: Calcular costos y porcentajes
2. **Solicitudes**: Gestionar solicitudes pendientes y aprobadas
3. **Desembolsos**: Registrar y consultar datos de desembolso
4. **Historial**: Mantener registro de todos los créditos del estudiante

### 📊 Dashboard y Reportes
1. **Resumen de Carrera**: Porcentaje de progreso académico
2. **Promedios**: Cálculo de promedios acumulados por periodo
3. **Banners Publicitarios**: Gestión de contenido promocional

---

## 🔒 Seguridad y Autenticación

### Niveles de Seguridad

1. **Autenticación Bearer JWT**: Todas las herramientas (excepto login) requieren token válido
2. **Validación de Entrada**: Sanitización y validación de todos los parámetros
3. **Manejo de Errores**: Respuestas estandarizadas sin exposición de datos sensibles
4. **Timeouts**: Configuración de timeouts para evitar conexiones colgadas

### Códigos de Error Comunes

| Código | Descripción | Acción Recomendada |
|--------|-------------|-------------------|
| 400 | Petición incorrecta | Verificar parámetros enviados |
| 401 | No autorizado | Renovar token de acceso |
| 404 | No encontrado | Verificar que el recurso existe |
| 409 | Conflicto | El registro ya existe en BD |
| 424 | Error de BD | Reintentar más tarde |

---

## 🛠️ Mantenimiento y Troubleshooting

### Logs y Debugging
- Todos los logs se muestran en la consola con emojis para fácil identificación
- Los errores incluyen contexto suficiente para debugging
- Las respuestas exitosas incluyen confirmaciones de operación

### Problemas Comunes

#### Error de Conexión
```bash
⚠️ ADVERTENCIA: Variable de entorno API_HOST no configurada
```
**Solución:** Configurar correctamente la variable `API_HOST` en el cliente MCP

#### Error de Autenticación
```bash
❌ Error: No autorizado. Verifica tu token de acceso
```
**Solución:** 
1. Usar `iniciar_sesion` para obtener un nuevo token
2. Actualizar `BEARER_TOKEN` en la configuración

#### Error de Validación
```bash
❌ Error: Tipo de documento inválido. Valores permitidos: C, CC, P, PAS, E, CE, T, TI, PPT
```
**Solución:** Verificar que los parámetros cumplan con los formatos esperados

### Comandos de Verificación

```bash
# Verificar la instalación
mcp --version

# Construir el proyecto
npm run build

# Verificar estructura de archivos
ls -la src/tools/

# Probar conexión (si tienes curl)
curl -X GET "https://tu-api-host.com/health"
```

---

## 📝 Notas Técnicas

### Arquitectura del Cliente API
- **Patrón Singleton**: Una sola instancia del cliente API
- **Manejo de Archivos Binarios**: Soporte especial para PDFs
- **Retry Logic**: Manejo inteligente de errores de red
- **Type Safety**: Validación con Zod para todos los parámetros

### Compatibilidad
- **Node.js**: Versión 16+ recomendada
- **MCP Framework**: Versión más reciente
- **Dependencias**: axios para peticiones HTTP

### Performance
- **Timeouts**: 30 segundos por defecto para operaciones normales
- **Streaming**: Soporte para archivos grandes (PDFs)
- **Caching**: No implementado (todas las consultas son en tiempo real)

---

## 📞 Soporte

Para problemas técnicos o consultas sobre la implementación:

1. **Revisar Logs**: Verificar la salida de la consola para errores específicos
2. **Validar Configuración**: Asegurar que todas las variables de entorno estén configuradas
3. **Probar Conectividad**: Verificar acceso a la API base
4. **Consultar Documentación**: Revisar ejemplos de uso y parámetros requeridos

---

## 🔄 Actualizaciones

Para mantener el servidor MCP 360 actualizado:

```bash
# Actualizar dependencias
npm update

# Reconstruir el proyecto
npm run build

# Reiniciar el cliente MCP
# (Según tu configuración específica)
```

---

**Versión:** 1.0.0  
**Última actualización:** Enero 2025  
**Compatibilidad API:** APP 360 v1.0