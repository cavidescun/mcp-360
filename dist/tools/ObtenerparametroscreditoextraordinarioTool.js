import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenerparametroscreditoextraordinarioTool extends MCPTool {
    name = "ObtenerParametrosCreditoExtraordinario";
    description = "Obtenerparametroscreditoextraordinario tool description";
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
export default ObtenerparametroscreditoextraordinarioTool;
