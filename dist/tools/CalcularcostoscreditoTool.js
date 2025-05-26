import { MCPTool } from "mcp-framework";
import { z } from "zod";
class CalcularcostoscreditoTool extends MCPTool {
    name = "CalcularCostosCredito";
    description = "Calcularcostoscredito tool description";
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
export default CalcularcostoscreditoTool;
