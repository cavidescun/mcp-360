import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ObtenerenlacesinteresTool extends MCPTool {
    name = "ObtenerEnlacesInteres";
    description = "Obtenerenlacesinteres tool description";
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
export default ObtenerenlacesinteresTool;
