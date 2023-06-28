import app from "./src/server.js";
import "dotenv/config";
import { createProxyMiddleware } from "http-proxy-middleware"

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT} of gateway`);
});

app.use("/characters", createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
  })
);

app.use("/films", createProxyMiddleware({
  target: "http://films:8002",
  changeOrigin: true,
}))

app.use("/planets", createProxyMiddleware({
  target: "http://planets:8003",
  changeOrigin: true,
}))
