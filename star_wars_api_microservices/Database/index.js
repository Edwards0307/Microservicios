import server from "./src/server.js";
import { PORT } from "./src/config/envs.js";

server.listen(PORT, () => {
  console.log(`Listen on Port ${PORT}`);
});
