import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface CalcularcostoscreditoInput {
  message: string;
}

class CalcularcostoscreditoTool extends MCPTool<CalcularcostoscreditoInput> {
  name = "CalcularCostosCredito";
  description = "Calcularcostoscredito tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: CalcularcostoscreditoInput) {
    return `Processed: ${input.message}`;
  }
}

export default CalcularcostoscreditoTool;