import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ConsultarestudianteporemailInput {
  message: string;
}

class ConsultarestudianteporemailTool extends MCPTool<ConsultarestudianteporemailInput> {
  name = "ConsultarEstudiantePorEmail";
  description = "Consultarestudianteporemail tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ConsultarestudianteporemailInput) {
    return `Processed: ${input.message}`;
  }
}

export default ConsultarestudianteporemailTool;