import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ValidarestudianteantiguoInput {
  message: string;
}

class ValidarestudianteantiguoTool extends MCPTool<ValidarestudianteantiguoInput> {
  name = "ValidarEstudianteAntiguo";
  description = "Validarestudianteantiguo tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ValidarestudianteantiguoInput) {
    return `Processed: ${input.message}`;
  }
}

export default ValidarestudianteantiguoTool;