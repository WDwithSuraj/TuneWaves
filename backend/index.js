const express = require("express")
const connection = require("./config/db")
const userRoutes = require("./routes/userRoute");
const songRoutes = require("./routes/songRoute");
const playlistRoutes = require("./routes/playlistRoute");
const searchRoutes = require("./routes/searchRoute");
const UserModel = require("./models/userModel")
const SongModel = require("./models/songModel")
const auth = require("./middleware/auth.middleware")
const cors = require('cors')



const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }))
// app.use(cors())

app.get("/tuneWaves/songs/like", auth, async (req, res) => {
    const user = await UserModel.findById(req.user._id);
    const songs = await SongModel.find({ _id: user.likedSongs });
    res.status(200).send({ data: songs });
});

app.use("/tuneWaves/users", userRoutes);
app.use("/tuneWaves/songs", songRoutes)
app.use("/tuneWaves/playlists", playlistRoutes);
app.use("/tuneWaves", searchRoutes)


app.get("/", async (req, res) => {
    res.json({ msg: "Backend For TuneWaves" });
});


app.listen(8080, async () => {
    await connection
    console.log("conected to db")
    console.log("Server is running on port 8080");
});

