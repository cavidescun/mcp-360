import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenertodastransaccionesTool extends MCPTool {
    name = "ObtenerTodasTransacciones";
    description = "Obtenertodastransacciones tool description";
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
export default ObtenertodastransaccionesTool;
