import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenersolicitudespendientesctayudaTool extends MCPTool {
    name = "ObtenerSolicitudesPendientesCtAyuda";
    description = "Obtenersolicitudespendientesctayuda tool description";
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
export default ObtenersolicitudespendientesctayudaTool;
