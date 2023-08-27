const SongModel = require("../models/songModel");
const songRouter = require("express").Router();
const admin = require("../middleware/admin.middleware");
const auth = require("../middleware/auth.middleware")
const validateObjectId = require("../middleware/validateObjectId");
const UserModel = require("../models/userModel");

///create song
songRouter.post("/upload", admin, async (req, res) => {
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
        res.send({ msg: "Internal Error" })
    }
})

//get all song
songRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const songs = await SongModel.findOne({ _id: id });
        res.status(200).send({ data: songs })
    } catch (error) {
        res.send(error.message)
    }
})


//update songs

songRouter.put("/update/:id", [validateObjectId, admin], async (req, res) => {
    try {
        const song = await SongModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).send({ data: song, msg: "song updated succsessfully" })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

//delete song by ID

songRouter.delete("/delete/:id", [validateObjectId, admin], async (req, res) => {
    try {
        await SongModel.findByIdAndDelete(req.params.id);
        res.status(200).send("Song deleted succsessfully")
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})



//like song
songRouter.put("/like/:id", [validateObjectId, auth], async (req, res) => {
    const { user } = req;
    try {
        let resMessage = "";
        const song = await SongModel.findById(req.params.id);
        if (!song) return res.status(400).send({ message: "Song does not exist" })
        const likedUser = await UserModel.findById(user._id);
        const index = likedUser.likedSongs.indexOf(song._id);

        if (index === -1) {
            likedUser.likedSongs.push(song._id);
            resMessage = "Added to your liked songs";
        } else {
            likedUser.likedSongs.splice(index, 1);
            resMessage = "Removed from your liked songs";
        }
        await likedUser.save();
        res.status(200).send({ message: resMessage })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})




module.exports = songRouter