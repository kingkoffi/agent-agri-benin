"use client";

import { useChat } from "@ai-sdk/react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({ api: "/api/chat" });

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-emerald-800">
        Chat avec l'agent Agri-Bénin
      </h1>

      <div className="flex-1 space-y-4 overflow-y-auto pb-4">
        {messages.length === 0 && (
          <p className="text-stone-500">
            Pose une question, demande une analyse ou un post Facebook...
          </p>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={`rounded-xl p-4 ${
              m.role === "user"
                ? "ml-8 bg-emerald-100"
                : "mr-8 bg-white border border-stone-200"
            }`}
          >
            <p className="text-sm font-medium text-stone-500 mb-1">
              {m.role === "user" ? "Toi" : "Agent"}
            </p>
            <div className="whitespace-pre-wrap">{m.content}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 pt-4 border-t">
        <input
          className="flex-1 rounded-xl border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={input}
          onChange={handleInputChange}
          placeholder="Ex: Génère un post sur les techniques de conservation des sols..."
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-xl bg-emerald-700 px-5 py-3 text-white font-medium hover:bg-emerald-800 disabled:opacity-50"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}