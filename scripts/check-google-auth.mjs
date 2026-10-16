import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
const uri = s => 'data:text/javascript;base64,' + Buffer.from(s).toString('base64');
const headersModule = uri('export const headers=async()=>globalThis.testHeaders;');
const navigation = uri('export function redirect(){throw Error("redirect");}');
const authModule = uri('export const googleAuth=async()=>({api:{getSession:async()=>globalThis.testSession}});');
let source = await fs.readFile(new URL('../app/chatgpt-auth.ts', import.meta.url), 'utf8');
source = source.replaceAll('next/headers', headersModule).replaceAll('next/navigation', navigation)
  .replaceAll('@/lib/google-auth', authModule).replaceAll('process.env.NEXT_PUBLIC_AUTH_PROVIDER', '"google"');
const auth = await import(uri(ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText));
globalThis.testHeaders = new Headers({'oai-authenticated-user-id':'forged','oai-authenticated-user-email':'fake@example.invalid'});
globalThis.testSession = null;
assert.equal(await auth.getChatGPTUser(), null);
globalThis.testHeaders.set('cookie','__Secure-better-auth.session_token=invalid');
assert.equal(await auth.getChatGPTUser(), null);
globalThis.testSession = {user:{id:'verified-google-user',name:'Student',email:'student@example.invalid'}};
assert.equal((await auth.getChatGPTUser()).userId,'verified-google-user');
for (const invalid of ['https://evil.invalid','//evil.invalid','/\\evil.invalid','/entrar','/sair']) {
  assert.equal(auth.chatGPTSignInPath(invalid),'/entrar?return_to=%2F');
}
assert.equal(auth.chatGPTSignInPath('/#bts/estudos/fire'),'/entrar?return_to=%2F%23bts%2Festudos%2Ffire');
delete globalThis.testHeaders;
delete globalThis.testSession;
console.log('PASS: Google mode ignores proxy identity headers, requires verified sessions, and restricts return URLs. OAuth provider exchange requires a separate live test.');
