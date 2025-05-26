import { MCPTool } from "mcp-framework";
import { z } from "zod";
class GenerarpdfcesantiasTool extends MCPTool {
    name = "GenerarPDFCesantias";
    description = "Generarpdfcesantias tool description";
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
export default GenerarpdfcesantiasTool;
