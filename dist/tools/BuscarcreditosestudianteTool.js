import { MCPTool } from "mcp-framework";
import { z } from "zod";
class BuscarcreditosestudianteTool extends MCPTool {
    name = "BuscarCreditosEstudiante";
    description = "Buscarcreditosestudiante tool description";
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
export default BuscarcreditosestudianteTool;
