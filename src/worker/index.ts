import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();


// Set the base path
app.basePath('/base')

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
