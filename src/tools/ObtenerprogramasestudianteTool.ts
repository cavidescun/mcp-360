import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ObtenerprogramasestudianteInput {
  message: string;
}

class ObtenerprogramasestudianteTool extends MCPTool<ObtenerprogramasestudianteInput> {
  name = "ObtenerProgramasEstudiante";
  description = "Obtenerprogramasestudiante tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ObtenerprogramasestudianteInput) {
    return `Processed: ${input.message}`;
  }
}

export default ObtenerprogramasestudianteTool;