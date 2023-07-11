import server from "./src/server.js";
import { PORT } from "./src/config/envs.js";
// import store from "./src/database/index.js";

// store.Planets.list().then((res) => console.log(res));

server.listen(PORT, () => {
  console.log(`Listen on Port ${PORT}`);
});
