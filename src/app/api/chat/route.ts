import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const openrouter = createOpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openrouter(process.env.MODEL_ID || "openai/gpt-4o-mini"),
    system: "You are a helpful assistant. Be concise and friendly.",
    messages,
  });

  return result.toUIMessageStreamResponse();
}
