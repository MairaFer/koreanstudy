# Migração do BoraLang

## Configuração criada
- Worker publicado: boralang.
- Origem: https://boralang.fernanda-maira2004.workers.dev
- Callback Google: /api/auth/callback/google
- Banco D1 criado: boralang. Migrações 0001 e 0002 aplicadas.
- ID público Google em wrangler.cloudflare.json; nenhuma chave secreta no código.

## Publicação
1. Instalar as dependências com npm ci.
2. Executar node scripts/build-cloudflare.mjs.
3. Aplicar as migrações com npx wrangler d1 migrations apply boralang --remote --config wrangler.cloudflare.json.
4. Publicar com npx wrangler deploy --config dist/server/wrangler.json.
5. Configurar GOOGLE_CLIENT_SECRET e BETTER_AUTH_SECRET como secrets no Worker. Gerar BETTER_AUTH_SECRET com pelo menos 32 bytes aleatórios; nunca colocar secrets em Git, logs ou chat.
6. Testar login Google, logout, isolamento de contas, gravação e recarga dos estudos.
7. Conectar o repositório GitHub no Workers Builds. Build: npm ci && node scripts/build-cloudflare.mjs. Deploy: npx wrangler d1 migrations apply boralang --remote --config wrangler.cloudflare.json && npx wrangler deploy --config dist/server/wrangler.json.

Não considerar migração concluída antes de verificar secrets, login real, limites do plano Free e integração GitHub. A publicação atual do Sites permanece independente. Identidades ChatGPT e Google são diferentes: não transferir dados privados apenas por coincidência de email. Preparar transferência autenticada separada.

## Validação em 15/10/2026
Instalação e lockfile atualizados; TypeScript, check-google-auth, check-backend, check-study-store e build Cloudflare passaram. Publicação confirmada no endereço acima. GET /, /entrar e /api/study: 200; headers de identidade forjados ignorados; PATCH anônimo: 401. BETTER_AUTH_SECRET configurado diretamente no cofre. GOOGLE_CLIENT_SECRET confirmado no cofre; início OAuth validado e entrada completa confirmada pela usuária. Pendente: transferência de dados antigos e conexão do GitHub para deploy automático.

Conexão GitHub confirmada no painel: MairaFer/koreanstudy, branch master, build npm run build:cloudflare, publicação com migrações D1 e dist/server/wrangler.json. Primeiro build automático em verificação.
