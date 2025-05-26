import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ConsultarnotasestudianteTool extends MCPTool {
    name = "ConsultarNotasEstudiante";
    description = "Consultarnotasestudiante tool description";
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
export default ConsultarnotasestudianteTool;
