import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ObtenertodastransaccionesInput {
  message: string;
}

class ObtenertodastransaccionesTool extends MCPTool<ObtenertodastransaccionesInput> {
  name = "ObtenerTodasTransacciones";
  description = "Obtenertodastransacciones tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ObtenertodastransaccionesInput) {
    return `Processed: ${input.message}`;
  }
}

export default ObtenertodastransaccionesTool;