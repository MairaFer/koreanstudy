import type {StudyChange,StudyRecords} from '../lib/study-data';
export async function readStudy(db:D1Database,userId:string):Promise<StudyRecords> {
  const rows=await db.prepare('SELECT item_key, value_json FROM study_items WHERE user_id = ?').bind(userId).all<{item_key:string;value_json:string}>();
  return Object.fromEntries(rows.results.map(row=>[row.item_key,JSON.parse(row.value_json)]));
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
