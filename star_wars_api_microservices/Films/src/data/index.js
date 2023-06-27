import films from "./films.json" assert { type: "json" };

export default {
    list: async () => {
        return films
    }
}