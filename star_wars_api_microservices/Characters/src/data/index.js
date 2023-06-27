import characters from "./characters.json" assert {type: "json"};

export default {
    list: async () => {
        return characters;
     },
 };