import { relations } from "drizzle-orm";
import * as t from "drizzle-orm/pg-core";

export const Users = t.pgTable("Users", {
  id: t.bigserial({ mode: "number" }).primaryKey(),
  name: t
    .varchar({
      length: 255,
    })
    .notNull(),
  surname: t
    .varchar({
      length: 255,
    })
    .notNull(),
  user_id: t.bigserial({ mode: "number" }).notNull(),
  birth: t
    .date({ mode: "string"}).notNull(),
  sex: t
    .varchar({
      length: 255,
    })
    .notNull(),
});

export const genres = t.pgTable("genres", {
  id: t.bigserial({ mode: "number" }).primaryKey(),
  title: t
    .varchar({
      length: 255,
    })
    .notNull(),
});

export const books = t.pgTable("books", {
  id: t.bigserial({ mode: "number" }).primaryKey(),
  title: t
    .varchar({
      length: 255,
    })
    .notNull(),
  author: t
    .varchar({
      length: 255,
    })
    .notNull(),
  info: t
    .varchar({
      length: 255,
    }),
  summary: t
    .varchar({
      length: 255,
    }),
  publishedAt: t
    .date({ mode: "string"}).notNull(),

  genreId: t.bigint({ mode: "number" }).references(() => genres.id, {
    onDelete: "set null",
  }),
});

export const bookRelations = relations(books, ({ one }) => ({
  genre: one(genres, {
    fields: [books.genreId],
    references: [genres.id],
  }),
}));