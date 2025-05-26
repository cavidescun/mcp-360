import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenerdetalledeudaestudiantilTool extends MCPTool {
    name = "ObtenerDetalleDeudaEstudiantil";
    description = "Obtenerdetalledeudaestudiantil tool description";
    schema = {
        message: {
            type: z.string(),
            description: "Message to process",
        },
    };
    async execute(input) {
        return `Processed: ${input.message}`;
    }
}
export default ObtenerdetalledeudaestudiantilTool;
