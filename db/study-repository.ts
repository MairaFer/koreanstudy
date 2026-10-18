import type {StudyChange,StudyRecords} from '../lib/study-data';
export async function readStudy(db:D1Database,userId:string):Promise<StudyRecords> {
  const rows=await db.prepare('SELECT item_key, value_json, updated_at FROM study_items WHERE user_id = ?').bind(userId).all<{item_key:string;value_json:string;updated_at:number}>();
  return Object.fromEntries(rows.results.map(row=>{
    const value=JSON.parse(row.value_json);
    // Older records have no save date; retain their existing database date.
    if(row.item_key.startsWith('word.')&&value&&typeof value==='object'&&value.savedAt===undefined)value.savedAt=row.updated_at;
    return [row.item_key,value];
  }));
}
export async function writeStudy(db:D1Database,userId:string,changes:StudyChange[],importOnly=false) {
  const timestamp=Date.now();
  await db.batch(changes.map(({key,value})=>{
    if(value===null) return importOnly
      ? db.prepare('SELECT item_key FROM study_items WHERE user_id = ? AND item_key = ?').bind(userId,key)
      : db.prepare('DELETE FROM study_items WHERE user_id = ? AND item_key = ?').bind(userId,key);
    const sql='INSERT INTO study_items (user_id, item_key, value_json, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, item_key) '+(importOnly?'DO NOTHING':'DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at');
    return db.prepare(sql).bind(userId,key,JSON.stringify(value),timestamp);
  }));
}
