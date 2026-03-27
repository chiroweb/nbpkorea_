/**
 * Admin base URL path. Set NEXT_PUBLIC_ADMIN_PATH in .env.local to customize.
 * Example: NEXT_PUBLIC_ADMIN_PATH=nbp6699  → admin lives at /nbp6699
 */
export const ADMIN_PATH = `/${process.env.NEXT_PUBLIC_ADMIN_PATH || "admin"}`;
