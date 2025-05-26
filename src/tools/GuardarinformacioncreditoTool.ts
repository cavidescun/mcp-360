import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface GuardarinformacioncreditoInput {
  message: string;
}

class GuardarinformacioncreditoTool extends MCPTool<GuardarinformacioncreditoInput> {
  name = "GuardarInformacionCredito";
  description = "Guardarinformacioncredito tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: GuardarinformacioncreditoInput) {
    return `Processed: ${input.message}`;
  }
}

export default GuardarinformacioncreditoTool;