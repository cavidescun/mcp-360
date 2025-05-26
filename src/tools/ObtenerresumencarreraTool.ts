import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ObtenerresumencarreraInput {
  message: string;
}

class ObtenerresumencarreraTool extends MCPTool<ObtenerresumencarreraInput> {
  name = "ObtenerResumenCarrera";
  description = "Obtenerresumencarrera tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ObtenerresumencarreraInput) {
    return `Processed: ${input.message}`;
  }
}

export default ObtenerresumencarreraTool;