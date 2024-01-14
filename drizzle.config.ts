import { defineConfig } from 'drizzle-kit'

export default defineConfig({

  schema: "./src/drizzle/schema.ts",
  out: "./db/drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,

})

