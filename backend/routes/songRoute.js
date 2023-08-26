const SongModel = require("../models/songModel");
const songRouter = require("express").Router();
const UserModel = require("../models/songModel");




///create song
songRouter.post("/upload", async (req, res) => {
    try {
        const song = await SongModel(req.body).save();
        res.status(200).send({ data: song, msg: "Song created successfully" })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})


//get all song
songRouter.get("/", async (req, res) => {
    try {
        const songs = await SongModel.find();
        res.status(200).send({ data: songs })
    } catch (error) {

    }
})


//update songs
songRouter.put("/update/:id", async (req, res) => {
    try {
        const song = await SongModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).send({ data: song, msg: "song updated succsessfully" })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

//delete song by ID

songRouter.delete("/delete/:id", async (req, res) => {
    try {
        await SongModel.findByIdAndDelete(req.params.id);
        res.status(200).send("Song deleted succsessfully")
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})



module.exports = songRouter