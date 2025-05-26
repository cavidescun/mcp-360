import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ObtenerhorarioclasesInput {
  message: string;
}

class ObtenerhorarioclasesTool extends MCPTool<ObtenerhorarioclasesInput> {
  name = "ObtenerHorarioClases";
  description = "Obtenerhorarioclases tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ObtenerhorarioclasesInput) {
    return `Processed: ${input.message}`;
  }
}

export default ObtenerhorarioclasesTool;