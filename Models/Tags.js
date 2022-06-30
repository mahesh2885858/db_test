import mongoose from "mongoose"

export const reqString = { type: String, required: true }

const tagsSchema = new mongoose.Schema({
    entityId: reqString,
    platformId: reqString,
    tag: reqString,
    in_menu: Boolean,


}, { timestamps: true })
const Tags = mongoose.model("Tags", tagsSchema)
export default Tags