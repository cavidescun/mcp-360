import { MCPTool } from "mcp-framework";
import { z } from "zod";
class GuardardatosdesembolsocreditoTool extends MCPTool {
    name = "GuardarDatosDesembolsoCredito";
    description = "Guardardatosdesembolsocredito tool description";
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
export default GuardardatosdesembolsocreditoTool;
