import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const raceRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.race.findMany();
  }),
})