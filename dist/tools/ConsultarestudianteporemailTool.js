import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ConsultarestudianteporemailTool extends MCPTool {
    name = "ConsultarEstudiantePorEmail";
    description = "Consultarestudianteporemail tool description";
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
export default ConsultarestudianteporemailTool;
