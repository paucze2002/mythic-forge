import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const characterRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        raceId: z.string().min(1),
        classId: z.string().min(1),
        backgroundId: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
    return ctx.db.character.create({
      data: {
        name: input.name,
        user: { connect: { id: ctx.session.user.id } },
        race: { connect: { id: input.raceId } },
        class: { connect: { id: input.classId } },
        ...(input.backgroundId && {
          background: { connect: { id: input.backgroundId } },
        }),
      },
    });
  }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const character = await ctx.db.character.findFirst({
      orderBy: { createdAt: "desc" },
      where: { user: { id: ctx.session.user.id } },
    });

    return character ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
