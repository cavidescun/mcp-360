import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ActualizarvalorescreditoTool extends MCPTool {
    name = "ActualizarValoresCredito";
    description = "Actualizarvalorescredito tool description";
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
export default ActualizarvalorescreditoTool;
