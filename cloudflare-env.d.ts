declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    AUTH_BASE_URL?: string;
    GOOGLE_CLIENT_ID?: string;
    GOOGLE_CLIENT_SECRET?: string;
    BETTER_AUTH_SECRET?: string;
    BUCKET?: R2Bucket;
  }
}
