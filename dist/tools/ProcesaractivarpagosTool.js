import { MCPTool } from "mcp-framework";
import { z } from "zod";
class ProcesaractivarpagosTool extends MCPTool {
    name = "ProcesarActivarPagos";
    description = "Procesaractivarpagos tool description";
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
export default ProcesaractivarpagosTool;
