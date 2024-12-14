import {
    pgTable,
    serial,
    text
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
    id: serial().primaryKey(),
    name: text().notNull(),
    prompt: text().notNull()
});

