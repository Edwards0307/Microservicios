import Films from "../data/index.js"

const getFilms = async (req, res) => {
    const films = await Films.list()
    res.status(200).json(films);
}

export default getFilms;