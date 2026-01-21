import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/database/schema/**/*.ts",
    out: "./drizzle",
	dialect: "mysql",
    dbCredentials: {
        host: "localhost",
        user: "root",
        password: "root",
        database: "whabot",
        port: 3306,
    },
});

