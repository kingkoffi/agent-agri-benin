export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-emerald-800">Dashboard</h1>
      <p className="mt-2 text-stone-600">
        Ici apparaîtront les veilles journalières, les rapports et les posts générés.
      </p>

      <div className="mt-8 rounded-xl border border-dashed border-stone-300 bg-white p-8 text-center text-stone-500">
        <p>Aucune veille enregistrée pour le moment.</p>
        <p className="mt-2 text-sm">
          Le cron journalier (à 7h UTC) alimentera automatiquement cette page.
        </p>
      </div>

      <div className="mt-6">
        <a
          href="/"
          className="text-emerald-700 hover:underline text-sm"
        >
          ← Retour à l'accueil
        </a>
      </div>
    </main>
  );
}