import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ConsultardeudaporcicloTool extends MCPTool {
    name = "ConsultarDeudaPorCiclo";
    description = "Consultardeudaporciclo tool description";
    schema = {
        message: {
            type: z.string(),
            description: "Message to process",
        },
    };
    async execute(input) {
        return `Processed: ${input.message}`;
    }
}
export default ConsultardeudaporcicloTool;
