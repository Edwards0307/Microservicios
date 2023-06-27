import planets from "./planets.json" assert { type: "json" };

export default {
    list: async () => {
       return planets
    }
}