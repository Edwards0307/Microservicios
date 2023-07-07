import server from "./src/server.js";
import { PORT } from "./src/config/envs.js";
import { Characters } from "./src/database/index.js";

Characters.get(200).then((res) => console.log(res));

server.listen(PORT, () => {
  console.log(`Listen on Port ${PORT}`);
});
