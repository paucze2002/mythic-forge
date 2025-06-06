import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const classRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.class.findMany();
  }),
})