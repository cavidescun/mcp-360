import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenerprogramasestudianteTool extends MCPTool {
    name = "ObtenerProgramasEstudiante";
    description = "Obtenerprogramasestudiante tool description";
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
export default ObtenerprogramasestudianteTool;
