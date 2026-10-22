import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o"),
    system: `Tu es l'agent Agri-Bénin, expert en agriculture béninoise.
Tu aides à la formation et à la sensibilisation.
Tu peux analyser des sujets, proposer des posts Facebook, expliquer des techniques agricoles, parler des tendances.
Réponds toujours en français, de façon claire et accessible à un public mixte.`,
    messages,
  });

  return result.toDataStreamResponse();
}