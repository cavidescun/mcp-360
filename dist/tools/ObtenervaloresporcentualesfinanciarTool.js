import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenervaloresporcentualesfinanciarTool extends MCPTool {
    name = "ObtenerValoresPorcentualesFinanciar";
    description = "Obtenervaloresporcentualesfinanciar tool description";
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
export default ObtenervaloresporcentualesfinanciarTool;
