import path from "path";

export const HOST = "0.0.0.0";

export const PORT = Number(process.env.PORT) || 3001;

export const STATIC_ASSETS_PATH = path.resolve(process.cwd(), "./static");
