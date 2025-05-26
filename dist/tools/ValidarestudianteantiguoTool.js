import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ValidarestudianteantiguoTool extends MCPTool {
    name = "ValidarEstudianteAntiguo";
    description = "Validarestudianteantiguo tool description";
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
export default ValidarestudianteantiguoTool;
