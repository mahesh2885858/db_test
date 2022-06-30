import mongoose from "mongoose"

export const reqString = { type: String, required: true }

const permissionsSchema = new mongoose.Schema({
    entityId: reqString,
    name: reqString,
    description: reqString,
    displayLabel: reqString


}, { timestamps: true })
const Permissions = mongoose.model("Permissions", permissionsSchema)
export default Permissions