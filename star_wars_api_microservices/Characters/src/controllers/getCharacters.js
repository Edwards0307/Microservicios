import Characters from "../data/index.js";

const getCharacters = async (req, res) => {
    const characters = await Characters.list();
    res.status(200).json(characters);
}

export default getCharacters;