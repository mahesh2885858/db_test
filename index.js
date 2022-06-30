import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import Router from "./Routes/Routes.js"
dotenv.config()
const PORT = process.env.PORT || 8000
const app = express()
mongoose.connect(process.env.MONGO_URL).then((db) => {


    console.log("its connected to mongo")
}).catch((Err) => console.log(Err))

app.use(express.json())
// const mongoSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },

// }, {
//     timestamps: true
// })

// const nameModel = mongoose.model("testNmae", mongoSchema)
// app.post("/", async (req, res) => {
//     try {
//         if (req.body.name !== undefined) {

//             res.send(await new nameModel({ name: req.body.name }).save())

//         } else {
//             throw "there is no name provided in req body"
//         }
//     } catch (error) {
//         console.log(error)
//         res.send(error)
//     }
// })
app.use("/data", Router)
app.listen(PORT, () => { console.log(`The server is running on port ${PORT}`) })