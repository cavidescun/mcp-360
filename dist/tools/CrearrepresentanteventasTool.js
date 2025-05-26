import { MCPTool } from "mcp-framework";
import { z } from "zod";
class CrearrepresentanteventasTool extends MCPTool {
    name = "CrearRepresentanteVentas";
    description = "Crearrepresentanteventas tool description";
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
export default CrearrepresentanteventasTool;
