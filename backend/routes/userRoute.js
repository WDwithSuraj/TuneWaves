const router = require("express").Router();
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validateObjectId = require("../middleware/validateObjectId");
const BlacklistModel = require("../models/blacklistModel");
require("dotenv").config();


//create user
router.post("/register", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(402).send({ message: "User already exits with given email" })
        }


        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashedPassword = await bcrypt.hash(password, salt)

        let newUser = await new UserModel({
            ...req.body,
            password: hashedPassword
        }).save();

        res.status(200).send({ data: newUser, message: "User created successfully" })
    } catch (error) {

    }
})


router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "Invalid email and passoword" })
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send({ message: "Invalid password" })
        }

        const token = user.generateAuthToken();
        res.status(200).send({ message: "Login sucsessfull!", token })

    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
})

router.post("/logout", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (token) {
            await BlacklistModel.updateMany({ $push: { blacklist: [token] } });
            res.status(200).send({ msg: "Logout sucsessfull" })
        }
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})




module.exports = router
