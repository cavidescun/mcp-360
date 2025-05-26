import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ObtenerordenesmatriculaInput {
  message: string;
}

class ObtenerordenesmatriculaTool extends MCPTool<ObtenerordenesmatriculaInput> {
  name = "ObtenerOrdenesMatricula";
  description = "Obtenerordenesmatricula tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ObtenerordenesmatriculaInput) {
    return `Processed: ${input.message}`;
  }
}

export default ObtenerordenesmatriculaTool;