const jwt = require("jsonwebtoken");
require("dotenv").config();
const BlacklistModel = require("../models/blacklistModel")

const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || null;
    try {
        if (!token) {
            return res.status(400).send({ message: "Access denied, Please provide token" })
        } else {
            const exitingToken = await BlacklistModel.find({ blacklist: { $in: token } })
            if (exitingToken.length > 0) {
                return res.status(400).send({ msg: "Please Login again!" })
            }
        }
        jwt.verify(token, process.env.PRIVATE_KEY, (err, validToken) => {
            if (err) {
                return res.status(400).send({ message: "Invalid token" })
            } else {
                req.user = validToken
                next();
            }
        })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
}


module.exports = auth;

