import { generateText, tool } from "ai";
import { xai } from "@ai-sdk/xai";
import { z } from "zod";

export const maxDuration = 60;

export async function GET(request: Request) {
  // Sécurité basique du cron
  const authHeader = request.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return new Response("Unauthorized", { status: 401 });
  }

  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { text, toolResults } = await generateText({
    model: xai("grok-3"),
    system: `Tu es un agent IA spécialisé en agriculture au Bénin.
Ton rôle : formation et sensibilisation d'un public mixte (agriculteurs, jeunes, coopératives, grand public).
Ton : mixte (pédagogique + inspirant + parfois alerte sur les risques).

Chaque jour tu dois :
1. Faire une veille des tendances mondiales et béninoises en agriculture.
2. Choisir 1 à 2 sujets prioritaires pour la sensibilisation/formation.
3. Produire une analyse courte ou un rapport si les données manquent.
4. Rédiger un post Facebook clair, engageant, en français, avec hashtags pertinents.

Réponds toujours en français.`,
    prompt: `Aujourd'hui nous sommes le ${today}.

Fais ta veille quotidienne et décide des sujets d'analyse.
Puis génère :
- Un résumé de la veille
- Le(s) sujet(s) choisi(s) et pourquoi
- Une analyse ou un rapport court
- Un post Facebook prêt à publier (max 400-500 caractères idéalement, avec emojis et hashtags)`,
    tools: {
      note_topic: tool({
        description: "Enregistre le sujet priorité du jour",
        parameters: z.object({
          titre: z.string(),
          raison: z.string(),
          type: z.enum(["analyse", "rapport", "alerte", "formation"]),
        }),
        execute: async (args) => args,
      }),
    },
  });

  return Response.json({
    date: today,
    content: text,
    tools: toolResults,
    message: "Veille journalière générée avec succès",
  });
}