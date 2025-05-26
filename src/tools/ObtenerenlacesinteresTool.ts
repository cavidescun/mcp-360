import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ObtenerenlacesinteresInput {
  message: string;
}

class ObtenerenlacesinteresTool extends MCPTool<ObtenerenlacesinteresInput> {
  name = "ObtenerEnlacesInteres";
  description = "Obtenerenlacesinteres tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ObtenerenlacesinteresInput) {
    return `Processed: ${input.message}`;
  }
}

export default ObtenerenlacesinteresTool;