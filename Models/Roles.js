import mongoose from "mongoose"

export const reqString = { type: String, required: true }

const rolesShema = new mongoose.Schema({
    entityId: reqString,

    name: reqString,
    description: reqString,
    permissionsArray: [String]


}, { timestamps: true })
const Roles = mongoose.model("Roles", rolesShema)
export default Roles