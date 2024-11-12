
const { Router }  = require("express");
const fs = require("fs");


const router = Router();

router.get("/", (req, res) => {
    try {
        const games = JSON.parse(fs.readFileSync("./src/data/games.json"));

        res.send(games)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
});

router.get("/:id", (req, res) => {
    try {
        const id = req.params.id;
        const games = JSON.parse(fs.readFileSync("./src/data/games.json"));
        const filteredGames = games.filter(game => game.id == id)

        if (filteredGames.length == 0) {
            res.send([]);
        }

        const [ filteredGame ] = filteredGames;

        res.send(filteredGame);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
router.get("/search/:query", (req, res) => {
    try {
        const query = req.params.query;
        const games = JSON.parse(fs.readFileSync("./src/data/games.json"));
        const filteredGames = games.filter((game) => {
            const lowername = game.name.toLowerCase();
            return lowername.search(query.toLowerCase()) >= 0
        });

        res.send(filteredGames);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
module.exports = router;





