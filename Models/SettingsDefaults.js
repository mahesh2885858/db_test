import mongoose from "mongoose"

export const reqString = { type: String, required: true }

const settingsDefaultsSchema = new mongoose.Schema({
    settingsType: reqString,
    settingsGroup: reqString,
    name: reqString,
    defaultValue: reqString,
    description: reqString,
    order: { type: Number, required: true },



}, { timestamps: true })
const SettingsDefaults = mongoose.model("settings_defaults", settingsDefaultsSchema)
export default SettingsDefaults