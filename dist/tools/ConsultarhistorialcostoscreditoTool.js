import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ConsultarhistorialcostoscreditoTool extends MCPTool {
    name = "ConsultarHistorialCostosCredito";
    description = "Consultarhistorialcostoscredito tool description";
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
export default ConsultarhistorialcostoscreditoTool;
