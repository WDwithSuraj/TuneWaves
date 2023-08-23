const express = require("express")
const userRoutes = require("./routes/userRoute");
const connection = require("./config/db")

const app = express();
app.use(express.json());


app.use("/tuneWaves/users", userRoutes);


app.get("/", async (req, res) => {
    res.json({ msg: "Backend For TuneWaves" });
});


app.listen(8080, async () => {
    await connection
    console.log("conected to db")
    console.log("Server is running on port 8080");
});

