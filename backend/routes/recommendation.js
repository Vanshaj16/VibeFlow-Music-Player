const express = require("express");
const router = express.Router();
const Song = require("../models/Song");

router.get("/recommendations/:query", async (req, res) => {
    try {
        const query = req.params.query;
        const recommendations = await Song.find({
            name: { $regex: query, $options: "i" }
        }).limit(10); // Limit to 10 recommendations
        res.json(recommendations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;