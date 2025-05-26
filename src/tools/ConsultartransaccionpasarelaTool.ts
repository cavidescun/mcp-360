import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ConsultartransaccionpasarelaInput {
  message: string;
}

class ConsultartransaccionpasarelaTool extends MCPTool<ConsultartransaccionpasarelaInput> {
  name = "ConsultarTransaccionPasarela";
  description = "Consultartransaccionpasarela tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ConsultartransaccionpasarelaInput) {
    return `Processed: ${input.message}`;
  }
}

export default ConsultartransaccionpasarelaTool;