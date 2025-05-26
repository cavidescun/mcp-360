import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenerordenesmatriculaTool extends MCPTool {
    name = "ObtenerOrdenesMatricula";
    description = "Obtenerordenesmatricula tool description";
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
export default ObtenerordenesmatriculaTool;
