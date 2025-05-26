import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenerresumencarreraTool extends MCPTool {
    name = "ObtenerResumenCarrera";
    description = "Obtenerresumencarrera tool description";
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
export default ObtenerresumencarreraTool;
