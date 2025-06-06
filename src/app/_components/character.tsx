"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function LatestCharacter() {
  const [latestCharacter] = api.character.getLatest.useSuspenseQuery();
  const { data: races = [] } = api.race.getAll.useQuery();
  const { data: classes = [] } = api.class.getAll.useQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const [raceId, setRaceId] = useState("");
  const [classId, setClassId] = useState("");
  const [backgroundId, setBackgroundId] = useState("");

  const createCharacter = api.character.create.useMutation({
    onSuccess: async () => {
      await utils.character.invalidate();
      setName("");
      setRaceId("");
      setClassId("");
      setBackgroundId("");
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
          createCharacter.mutate({
            name,
            raceId,
            classId,
            backgroundId: backgroundId || undefined,
          });
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
        <select
          value={raceId}
          onChange={(e) => setRaceId(e.target.value)}
          className="rounded px-4 py-2"
        >
          <option value="">Select Race</option>
          {races.map((race) => (
            <option key={race.id} value={race.id}>
              {race.name}
            </option>
          ))}
        </select>
        <select
          value={classId}
          onChange={(e) => setClassId(e.target.value)}
          className="rounded px-4 py-2"
        >
          <option value="">Select Class</option>
          {classes.map((cls) => (
            <option key={cls.id} value={cls.id}>
              {cls.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Background ID (optional)"
          value={backgroundId}
          onChange={(e) => setBackgroundId(e.target.value)}
          className="rounded-full bg-white/10 px-4 py-2"
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
