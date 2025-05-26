import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface BuscardetallescorecreditoInput {
  message: string;
}

class BuscardetallescorecreditoTool extends MCPTool<BuscardetallescorecreditoInput> {
  name = "BuscarDetallesCoreCredito";
  description = "Buscardetallescorecredito tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: BuscardetallescorecreditoInput) {
    return `Processed: ${input.message}`;
  }
}

export default BuscardetallescorecreditoTool;