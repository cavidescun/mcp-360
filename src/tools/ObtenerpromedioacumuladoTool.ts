import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ObtenerpromedioacumuladoInput {
  message: string;
}

class ObtenerpromedioacumuladoTool extends MCPTool<ObtenerpromedioacumuladoInput> {
  name = "ObtenerPromedioAcumulado";
  description = "Obtenerpromedioacumulado tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ObtenerpromedioacumuladoInput) {
    return `Processed: ${input.message}`;
  }
}

export default ObtenerpromedioacumuladoTool;