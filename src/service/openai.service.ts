import OpenAI from "openai";
import { APP_CONFIG } from "../config";

export class OpenAiService {
    private openAi:OpenAI;
    private static instance: OpenAiService;
    static getInstance(): OpenAiService {
        if (!OpenAiService.instance) {
            OpenAiService.instance = new OpenAiService();
        }
        return OpenAiService.instance;
    }

    private constructor(){
        this.openAi = new OpenAI({
            apiKey: APP_CONFIG.OPEN_AI_KEY,
        })
    }

    async chat(prompt:string,model:string = APP_CONFIG.OPEN_AI_MODEL , oldContent?:[]){
       const chatResponse =  await this.openAi.chat.completions.create({
            model: model,
            messages: [
                {role:'system' , content :"You are CSLK Assistant You are here to help with any programming related problems"},
                ...(oldContent || []),
                {role:'user' , content: prompt},
            ],
            max_tokens: 1000,
            temperature: 0.8,
        })
        return chatResponse.choices[0]?.message?.content || 'No Response';
    }
}