const express = require("express");
const router  = express.Router();

const Movie = require("../models/movie.js");

router.get("/", (req, res) => {
    Movie.find({})
    .then((movies) => {
        res.render("movies/index");
    })
    .catch(error => console.error(error));
});

// router.get("/index")

module.exports = router;