import mongoose from "mongoose"

export const reqString = { type: String, required: true }

const usersSchema = new mongoose.Schema({
    entityId: reqString,
    email: reqString,
    roleId: reqString,
    platformAccess: reqString,
    customSettings: [{ settingName: reqString, settingValue: reqString }],
    name: reqString,
    displayName: reqString,
    avatar: reqString,
    jobTitle: reqString,
    organization: reqString,
    tags: [String],
    bio: reqString,


}, { timestamps: true })
const Users = mongoose.model("Users", usersSchema)
export default Users