import { Request, Response } from "express";
import { OpenAiService } from "../service";
import { APP_CONFIG } from "../config";

export class ChatController {
    private static instance: ChatController;
    public static getInstance(): ChatController {
        if (!ChatController.instance) {
            ChatController.instance = new ChatController();
        }
        return ChatController.instance;
    }

    private constructor() {}

    chat = async (req: Request, res: Response) => {
        const { prompt,oldContent } = req.body;
        try{
            const response = await OpenAiService.getInstance().chat(prompt, APP_CONFIG.OPEN_AI_MODEL, oldContent);
            res.json({ response });
        }catch (error) {
            console.error("Error in chat controller:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
        
    };

}