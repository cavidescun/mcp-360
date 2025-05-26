import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface CreartransaccionpasarelaInput {
  message: string;
}

class CreartransaccionpasarelaTool extends MCPTool<CreartransaccionpasarelaInput> {
  name = "CrearTransaccionPasarela";
  description = "Creartransaccionpasarela tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: CreartransaccionpasarelaInput) {
    return `Processed: ${input.message}`;
  }
}

export default CreartransaccionpasarelaTool;