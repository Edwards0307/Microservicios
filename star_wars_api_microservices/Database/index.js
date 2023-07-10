import server from "./src/server.js";
import { PORT } from "./src/config/envs.js";
import { Characters, Films, Planets } from "./src/database/index.js";

Planets.list().then((res) => console.log(res));

server.listen(PORT, () => {
  console.log(`Listen on Port ${PORT}`);
});
