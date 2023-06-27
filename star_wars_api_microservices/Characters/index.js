import server from "./src/server.js";
import "dotenv/config"

const { PORT } = process.env;

server.listen(PORT, () => {
    console.log(`Listen on port ${PORT} of characters`)
})