// Add ./src/drizzle/table.ts

const tbl_prefix = 'nv_';
export function tableNames(tableName: string) {
  return tbl_prefix + tableName;
};