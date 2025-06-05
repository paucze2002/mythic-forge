"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function LatestCharacter() {
  const [latestCharacter] = api.character.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const createCharacter = api.character.create.useMutation({
    onSuccess: async () => {
      await utils.character.invalidate();
      setName("");
    },
  });

  return (
    <div className="w-full max-w-xs">
      {latestCharacter ? (
        <p className="truncate">
          Your most recent character: {latestCharacter.name}
        </p>
      ) : (
        <p>You have no characters yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createCharacter.mutate({ name });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full bg-white/10 px-4 py-2 text-white"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createCharacter.isPending}
        >
          {createCharacter.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
