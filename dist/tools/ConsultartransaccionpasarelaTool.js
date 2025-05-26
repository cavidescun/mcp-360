import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ConsultartransaccionpasarelaTool extends MCPTool {
    name = "ConsultarTransaccionPasarela";
    description = "Consultartransaccionpasarela tool description";
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
export default ConsultartransaccionpasarelaTool;
