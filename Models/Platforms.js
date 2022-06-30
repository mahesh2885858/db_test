import mongoose from "mongoose"

export const reqString = { type: String, required: true }

const PlatformSchema = new mongoose.Schema({
    entityId: reqString,
    name: reqString,
    customSettings: [{ settingName: String, settingValue: String }],
    platformUrl: reqString


}, { timestamps: true })
const Platforms = mongoose.model("Platforms", PlatformSchema)
export default Platforms