const express = require("express");
const router  = express.Router();

const Movie = require("../models/movie.js");

router.get("/movies", (req, res) => {
    Movie.find({})
    .then((movies) => {
        res.render("movie"/index", {movies});
    })
    .catch((error)) => console.error(error));
});

router.get("/index)

module.exports = router;