import { MCPTool } from "mcp-framework";
import { z } from "zod";
class GenerarpdfdeudacesantiasTool extends MCPTool {
    name = "GenerarPDFDeudaCesantias";
    description = "Generarpdfdeudacesantias tool description";
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
export default GenerarpdfdeudacesantiasTool;
