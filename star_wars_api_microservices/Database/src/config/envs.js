import "dotenv/config";

export const { MONGO_URI, PORT } = process.env;

const config = {
    MONGO_URI,
    PORT
};

export default config