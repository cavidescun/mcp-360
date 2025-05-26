import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ConsultarnotasestudianteInput {
  message: string;
}

class ConsultarnotasestudianteTool extends MCPTool<ConsultarnotasestudianteInput> {
  name = "ConsultarNotasEstudiante";
  description = "Consultarnotasestudiante tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ConsultarnotasestudianteInput) {
    return `Processed: ${input.message}`;
  }
}

export default ConsultarnotasestudianteTool;