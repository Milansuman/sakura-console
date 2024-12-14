import {drizzle} from "drizzle-orm/node-postgres";

const db = drizzle(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASS}@localhost/sakura`);

export default db;