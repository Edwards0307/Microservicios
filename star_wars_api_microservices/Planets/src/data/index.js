import planets from "./planets.json" assert { type: "json" };

export default {
    list: async () => {
        const result = axios.get("http://database:8004/Plantes");
        return result.data
    }
}