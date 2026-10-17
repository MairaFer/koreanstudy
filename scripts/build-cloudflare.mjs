import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const localeCheck=spawnSync(process.execPath,[fileURLToPath(new URL('./check-locales.mjs',import.meta.url))],{stdio:'inherit'});
if(localeCheck.status!==0)process.exit(localeCheck.status??1);
process.env.BORALANG_CLOUDFLARE='1';
process.argv=[process.execPath,'vinext','build'];
await import('../node_modules/vinext/dist/cli.js');
