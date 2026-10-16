process.env.BORALANG_CLOUDFLARE='1';
process.argv=[process.execPath,'vinext','build'];
await import('../node_modules/vinext/dist/cli.js');
