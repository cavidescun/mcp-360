import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface GuardarhistorialcostoscreditoInput {
  message: string;
}

class GuardarhistorialcostoscreditoTool extends MCPTool<GuardarhistorialcostoscreditoInput> {
  name = "GuardarHistorialCostosCredito";
  description = "Guardarhistorialcostoscredito tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: GuardarhistorialcostoscreditoInput) {
    return `Processed: ${input.message}`;
  }
}

export default GuardarhistorialcostoscreditoTool;