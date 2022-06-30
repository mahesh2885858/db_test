import mongoose from "mongoose"

export const reqString = { type: String, required: true }

const invitaionsSchema = new mongoose.Schema({
    entityId: reqString,
    inviteToken: reqString,
    email: reqString,
    roleId: reqString,
    platformIds: reqString,
    sentAt: [String],
    expiresAt: reqString,
    status: reqString,
    cancelledAt: Date,
    cancelledBy: reqString,



}, { timestamps: true })
const Invitaions = mongoose.model("invitations", invitaionsSchema)
export default Invitaions