import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenerpromedioacumuladoTool extends MCPTool {
    name = "ObtenerPromedioAcumulado";
    description = "Obtenerpromedioacumulado tool description";
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
export default ObtenerpromedioacumuladoTool;
