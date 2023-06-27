import Planets from "../data/index.js"

const getPlanets = async (req, res) => {
    const planets = await Planets.list();
    res.status(200).json(planets);
}

export default getPlanets;