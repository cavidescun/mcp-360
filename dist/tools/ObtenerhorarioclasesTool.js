import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenerhorarioclasesTool extends MCPTool {
    name = "ObtenerHorarioClases";
    description = "Obtenerhorarioclases tool description";
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
export default ObtenerhorarioclasesTool;
