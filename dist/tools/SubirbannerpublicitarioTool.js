import { MCPTool } from "mcp-framework";
import { z } from "zod";
class SubirbannerpublicitarioTool extends MCPTool {
    name = "SubirBannerPublicitario";
    description = "Subirbannerpublicitario tool description";
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
export default SubirbannerpublicitarioTool;
