import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
    schema: './lib/db/schema.ts',
    dbCredentials: {
        host: "localhost",
        user: "postgres",
        password: process.env.POSTGRES_PASSWORD,
        database: "sakura",
        ssl: false
    }
})