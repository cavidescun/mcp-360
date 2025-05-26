import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ConsultartransaccionpagoTool extends MCPTool {
    name = "ConsultarTransaccionPago";
    description = "Consultartransaccionpago tool description";
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
export default ConsultartransaccionpagoTool;
