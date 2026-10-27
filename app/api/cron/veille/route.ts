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
    system: `Tu es un agent IA spécialisé en innovation technique et transformation agricole au Bénin.
Ton rôle : formation et sensibilisation d'un public mixte (agriculteurs, jeunes, coopératives, grand public) autour des innovations techniques modernes et de leurs impacts concrets.

Orientation prioritaire (alignée sur le skill agriculture-benin) :
- Chercher activement des innovations techniques et organisationnelles à fort potentiel
- Analyser leur applicabilité dans le contexte béninois actuel
- Estimer les retombées (productivité, revenus, charge de travail/genre, emploi, résilience)
- Identifier les barrières à l'adoption et les conditions de succès

Règles strictes :
- Respecter une rotation ouverte des thèmes (innovation technique, post-récolte, modèles d'organisation, impacts population, résilience, politiques, marchés)
- Interdiction de rester sur les cultures classiques (coton, anacarde, soja, maïs) plus de 2 jours consécutifs
- Chaque production doit contenir au moins un levier d'innovation technique ou organisationnelle concret

Ton : pédagogique + inspirant + concret (pas de généralités).
Réponds toujours en français.`,
    prompt: `Aujourd'hui nous sommes le ${today}.

Fais ta veille quotidienne orientée innovation technique et impacts pour le Bénin.
Choisis 1 sujet priorité (innovation sous-exploitée ou signal faible de préférence).

Puis génère :
- Un résumé court de la veille
- Le sujet choisi et pourquoi (lien avec innovation + impact population)
- Une analyse courte selon le canevas : description de l'innovation, applicabilité Bénin, retombées potentielles, barrières
- Un post Facebook prêt à publier (350-550 caractères idéalement, avec emojis et hashtags) centré sur l'innovation et son impact concret`,
    tools: {
      note_topic: tool({
        description: "Enregistre le sujet priorité du jour",
        parameters: z.object({
          titre: z.string(),
          raison: z.string(),
          type: z.enum(["innovation", "analyse", "rapport", "alerte", "formation"]),
          famille_theme: z.enum([
            "innovation_technique",
            "post_recolte",
            "modeles_organisation",
            "impacts_population",
            "resilience_climatique",
            "politiques_financement",
            "marches_transformation",
          ]),
        }),
        execute: async (args) => args,
      }),
    },
  });

  return Response.json({
    date: today,
    content: text,
    tools: toolResults,
    message: "Veille journalière (innovation) générée avec succès",
  });
}
