import { betterAuth } from 'better-auth';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from '@/db/auth-schema';
export async function googleAuth() {
  const {env}=await import('cloudflare:workers');
  if(!env.DB || !env.GOOGLE_CLIENT_SECRET || !env.BETTER_AUTH_SECRET) throw new Error('Google login is not configured');
  return betterAuth({
    appName:'BoraLang', baseURL:env.AUTH_BASE_URL, secret:env.BETTER_AUTH_SECRET,
    database:drizzleAdapter(drizzle(env.DB,{schema}),{provider:'sqlite',schema,transaction:false}),
    socialProviders:{google:{clientId:env.GOOGLE_CLIENT_ID!,clientSecret:env.GOOGLE_CLIENT_SECRET}},
    account:{accountLinking:{enabled:false}},
    advanced:{useSecureCookies:true},
  });
}
