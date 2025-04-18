import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>().basePath('/lite');

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
