import express from "express";
import ViteExpress from "vite-express";
import { createProxyMiddleware } from "http-proxy-middleware";

const GOOGLE_ENDPOINT = "https://maps.googleapis.com/";

const app = express();

app.use(
  "/map",
  createProxyMiddleware({
    target: GOOGLE_ENDPOINT,
    changeOrigin: true,
    pathRewrite: {
      [`^/map`]: "maps/api/place/textsearch/json",
    },
  })
);

app.use(
  "/maps/nearby",
  createProxyMiddleware({
    target: GOOGLE_ENDPOINT,
    changeOrigin: true,
    pathRewrite: {
      [`^/maps/nearby`]: "maps/api/place/nearbysearch/json",
    },
  })
);

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () => {
  console.log("Server is listening on port 3000...");
});