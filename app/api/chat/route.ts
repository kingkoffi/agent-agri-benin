import { streamText } from "ai";
import { xai } from "@ai-sdk/xai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: xai("grok-3"),
    system: `Tu es l'agent Agri-Bénin, expert en agriculture béninoise.
Tu aides à la formation et à la sensibilisation.
Tu peux analyser des sujets, proposer des posts Facebook, expliquer des techniques agricoles, parler des tendances.
Réponds toujours en français, de façon claire et accessible à un public mixte.`,
    messages,
  });

  return result.toDataStreamResponse();
}