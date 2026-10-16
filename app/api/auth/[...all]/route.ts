import {googleAuth} from '@/lib/google-auth';
export const dynamic='force-dynamic';
async function handler(request:Request){
  try{return await (await googleAuth()).handler(request);}
  catch{return Response.json({error:'Login temporariamente indisponível. Você pode continuar estudando como visitante.'},{status:503,headers:{'Cache-Control':'no-store'}});}
}
export {handler as GET,handler as POST};
