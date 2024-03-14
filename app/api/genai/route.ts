import { StreamingTextResponse, GoogleGenerativeAIStream } from "ai";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request, res: Response) {
  const reqBody = await req.json();
  console.log(reqBody);
  /**
   * {
      messages: [ { role: 'user', content: 'test' } ],
      data: { prompt: 'test' }
    }
   */
  const prompt = reqBody.data.prompt;

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const streamingResponce = await model.generateContentStream(prompt);
  console.log(streamingResponce);

  return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponce));
}
