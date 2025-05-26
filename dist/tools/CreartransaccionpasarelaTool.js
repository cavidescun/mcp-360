import { MCPTool } from "mcp-framework";
import { z } from "zod";
class CreartransaccionpasarelaTool extends MCPTool {
    name = "CrearTransaccionPasarela";
    description = "Creartransaccionpasarela tool description";
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
export default CreartransaccionpasarelaTool;
