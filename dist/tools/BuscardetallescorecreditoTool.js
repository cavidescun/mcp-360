import { MCPTool } from "mcp-framework";
import { z } from "zod";
class BuscardetallescorecreditoTool extends MCPTool {
    name = "BuscarDetallesCoreCredito";
    description = "Buscardetallescorecredito tool description";
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
export default BuscardetallescorecreditoTool;
