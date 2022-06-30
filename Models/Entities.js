import mongoose from "mongoose"

export const reqString = { type: String, required: true }
// const customSettingsSchema = new mongoose.Schema({

// })
const entitiesSchema = new mongoose.Schema({
    name: reqString,
    website: reqString,
    accountHolder: reqString,
    customSettings: [{ settingName: String, settingValue: String }],

}, { timestamps: true })
const Entities = mongoose.model("entities", entitiesSchema)
export default Entities