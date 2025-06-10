import { Navbar } from "~/app/_components/navbar";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.character.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <Navbar session={session}/>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black font-sans text-white">
        <div className="container flex flex-col items-center gap-12 px-4 py-16">
          <h1 className="text-center text-5xl leading-tight font-extrabold tracking-wide text-white drop-shadow-lg sm:text-6xl">
            RPG Character Builder
          </h1>
          <p className="text-lg text-white/80">
            Craft your hero and forge their destiny
          </p>
        </div>
      </main>
    </HydrateClient>
  );
}
