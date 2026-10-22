import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="rounded-2xl bg-white p-8 shadow-sm border border-stone-200">
        <h1 className="text-3xl font-bold text-emerald-800">
          Agent Agri-Bénin
        </h1>
        <p className="mt-2 text-stone-600">
          Formation & sensibilisation agricole — veille journalière, analyses et posts Facebook.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/dashboard"
            className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 hover:bg-emerald-100 transition"
          >
            <h2 className="font-semibold text-emerald-900">Dashboard</h2>
            <p className="mt-1 text-sm text-stone-600">
              Voir les dernières veilles, rapports et posts générés
            </p>
          </Link>

          <Link
            href="/chat"
            className="rounded-xl border border-stone-200 bg-stone-50 p-5 hover:bg-stone-100 transition"
          >
            <h2 className="font-semibold text-stone-900">Chat avec l'agent</h2>
            <p className="mt-1 text-sm text-stone-600">
              Pose des questions ou force un sujet d'analyse
            </p>
          </Link>
        </div>

        <div className="mt-8 rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900">
          <strong>Prochaine étape :</strong> Crée ta page Facebook (voir README) puis relie le token.
          La veille tourne automatiquement tous les jours à 7h UTC.
        </div>
      </div>
    </main>
  );
}