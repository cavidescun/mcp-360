import { MCPTool } from "mcp-framework";
import { z } from "zod";
class GuardarhistorialcostoscreditoTool extends MCPTool {
    name = "GuardarHistorialCostosCredito";
    description = "Guardarhistorialcostoscredito tool description";
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
export default GuardarhistorialcostoscreditoTool;
