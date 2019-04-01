import path from "path";

export const HOST = "0.0.0.0";

export const PORT = Number(process.env.PORT) || 8080;

export const TEMPLATES_PATH = path.resolve(process.cwd(), "./templates");
