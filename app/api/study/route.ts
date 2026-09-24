import {env} from 'cloudflare:workers';
import {getChatGPTUser,chatGPTSignInPath,chatGPTSignOutPath} from '@/app/chatgpt-auth';
import {readStudy,writeStudy} from '@/db/study-repository';
import {validateChanges} from '@/lib/study-data';
export const dynamic='force-dynamic';
const reply=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'private, no-store','Vary':'Cookie'}});
export async function GET(request:Request) {
  const user=await getChatGPTUser();
  const returnTo=new URL(request.url).searchParams.get('returnTo')??'/';
  const session={user:user?{key:user.userId,name:user.displayName,email:user.email}:null,signIn:chatGPTSignInPath(returnTo),signOut:chatGPTSignOutPath('/')};
  if(!user)return reply({...session,records:{}});
  try {
    if(!env.DB)throw Error('Database unavailable');
    return reply({...session,records:await readStudy(env.DB,user.userId)});
  }catch{ return reply({...session,error:'Não foi possível carregar seus dados. Tente novamente.'},503); }
}
export async function PATCH(request:Request) {
  const user=await getChatGPTUser();
  if(!user)return reply({error:'Entre na sua conta para salvar.'},401);
  if(request.headers.get('x-study-account')!==user.userId)return reply({error:'Sua conta mudou. Recarregue a página antes de salvar.'},409);
  if(request.headers.get('origin')!==new URL(request.url).origin||request.headers.get('sec-fetch-site')==='cross-site')return reply({error:'Origem inválida.'},403);
  if(!request.headers.get('content-type')?.startsWith('application/json'))return reply({error:'Formato inválido.'},415);
  const reader=request.body?.getReader();if(!reader)return reply({error:'Dados ausentes.'},400);
  const chunks:Uint8Array[]=[];let size=0;
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>250000){await reader.cancel();return reply({error:'Dados muito grandes.'},413);}chunks.push(value);}
  let changes,importOnly=false;
  try{const bytes=new Uint8Array(size);let offset=0;for(const c of chunks){bytes.set(c,offset);offset+=c.length;}const body=JSON.parse(new TextDecoder().decode(bytes));changes=validateChanges(body.changes);importOnly=body.importOnly===true;}catch{return reply({error:'Dados de estudo inválidos.'},400);}
  try{if(!env.DB)throw Error('Database unavailable');await writeStudy(env.DB,user.userId,changes,importOnly);return reply({ok:true});}
  catch{return reply({error:'Não foi possível salvar. Suas alterações continuam nesta tela; tente novamente.'},503);}
}
