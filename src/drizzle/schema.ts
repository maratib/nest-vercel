// src/drizzle/schema.ts

import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { InferInsertModel, InferSelectModel, relations } from 'drizzle-orm';
import { tableNames } from './tables';

export const users = pgTable(tableNames('users'), {
  user_id: serial('user_id').primaryKey(),
  email: text('email'),
});

export type User = InferSelectModel<typeof users>
export type NewUser = InferInsertModel<typeof users>