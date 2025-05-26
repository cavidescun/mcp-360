import { MCPTool } from "mcp-framework";
import { z } from "zod";
class GuardarinformacioncreditoTool extends MCPTool {
    name = "GuardarInformacionCredito";
    description = "Guardarinformacioncredito tool description";
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
export default GuardarinformacioncreditoTool;
