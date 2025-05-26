import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ConsultardeudaporcicloInput {
  message: string;
}

class ConsultardeudaporcicloTool extends MCPTool<ConsultardeudaporcicloInput> {
  name = "ConsultarDeudaPorCiclo";
  description = "Consultardeudaporciclo tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ConsultardeudaporcicloInput) {
    return `Processed: ${input.message}`;
  }
}

export default ConsultardeudaporcicloTool;