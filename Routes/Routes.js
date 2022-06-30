import express from 'express'
import { saveEntities, saveInvitations, savePermissions, savePlatforms, saveRole, saveSettingsDefaults, saveTags, saveUser } from '../controllers/Controller.js'
const Router = express.Router()
Router.post("/addentity", saveEntities)
Router.post("/addsettingsdefaults", saveSettingsDefaults)
Router.post("/sendinvitaion", saveInvitations)
Router.post("/saveuser", saveUser)
Router.post("/saverole", saveRole)
Router.post("/savepermissions", savePermissions)
Router.post("/saveplatforms", savePlatforms)
Router.post("/savetag", saveTags)

export default Router