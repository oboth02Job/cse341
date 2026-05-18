const ObjectId = require("mongodb").ObjectId
const mongodb = require("../data/database")

const getAll = async (req, res) => {
    const result = mongodb
        .getDatabase()
        .collection("my databases")
        .find();

    const users = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
}

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id)
    const user = await mongodb
        .getDatabase()
        .collection("my databases")
        .findOne({ _id: userId })

    res.setHeader("Content-Type", "application/json")
    res.status(200).json(user)
}

module.exports = {getAll, getSingle}