import Entities from "../Models/Entities.js"
import Invitaions from "../Models/Invitations.js"
import Permissions from "../Models/Permissions.js"
import Platforms from "../Models/Platforms.js"
import Roles from "../Models/Roles.js"
import SettingsDefaults from "../Models/SettingsDefaults.js"
import Tags from "../Models/Tags.js"
import Users from "../Models/Users.js"
export const saveEntities = async (req, res) => {
    const {
        name,
        website,
        accountHolder,
        customSettings
    } = req.body
    try {
        if (name && website && accountHolder && customSettings) {
            const data = new Entities({ name, website, accountHolder, customSettings })
            res.send(await data.save())
        } else {
            throw "details are missing"
        }
    } catch (error) {
        res.send(error)
    }
}
export const saveSettingsDefaults = async (req, res) => {
    const {
        settingsType,
        settingsGroup,
        name,
        defaultValue,
        description,
        order
    } = req.body
    try {
        if (settingsType &&
            settingsGroup &&
            name &&
            defaultValue &&
            description &&
            order) {
            const data = new SettingsDefaults({
                settingsType,
                settingsGroup,
                name,
                defaultValue,
                description,
                order
            })
            res.send(await data.save())
        } else {
            throw "details are missing"
        }
    } catch (error) {
        res.send(error)
    }
}
export const saveInvitations = async (req, res) => {
    const {
        entityId,
        inviteToken,
        email,
        roleId,
        platformIds,
        sentAt,
        expiresAt,
        status,

        cancelledBy,

    } = req.body
    const cancelledAt = new Date()
    try {
        if (
            entityId &&
            inviteToken &&
            email &&
            roleId &&
            platformIds &&
            sentAt &&
            expiresAt &&
            status &&
            cancelledAt &&
            cancelledBy
        ) {
            const data = new Invitaions({
                entityId,
                inviteToken,
                email,
                roleId,
                platformIds,
                sentAt,
                expiresAt,
                status,
                cancelledAt,
                cancelledBy
            })
            res.send(await data.save())
        } else {
            throw "details are missing"
        }
    } catch (error) {
        res.send(error)
    }
}
export const saveUser = async (req, res) => {
    const {
        entityId,
        email,
        roleId,
        platformAccess,
        customSettings,
        name,
        displayName,
        avatar,
        jobTitle,
        organization,
        tags,
        bio,

    } = req.body
    try {
        if (
            entityId &&
            email &&
            roleId &&
            platformAccess &&
            customSettings &&
            name &&
            displayName &&
            avatar &&
            jobTitle &&
            organization &&
            tags &&
            bio
        ) {
            const data = new Users({
                entityId,
                email,
                roleId,
                platformAccess,
                customSettings,
                name,
                displayName,
                avatar,
                jobTitle,
                organization,
                tags,
                bio
            })
            res.send(await data.save())
        } else {
            throw "details are missing"
        }
    } catch (error) {
        res.send(error)
    }
}
export const saveRole = async (req, res) => {
    const {
        entityId,

        name,
        description,
        permissionsArray,

    } = req.body
    try {
        if (
            entityId &&

            name &&
            description &&
            permissionsArray) {
            const data = new Roles({
                entityId,

                name,
                description,
                permissionsArray,
            })
            res.send(await data.save())
        } else {
            throw "details are missing"
        }
    } catch (error) {
        res.send(error)
    }
}
export const savePermissions = async (req, res) => {
    const {
        entityId,

        name,
        description,
        displayLabel,

    } = req.body
    try {
        if (
            entityId &&

            name &&
            description &&
            displayLabel) {
            const data = new Permissions({
                entityId,

                name,
                description,
                displayLabel,
            })
            res.send(await data.save())
        } else {
            throw "details are missing"
        }
    } catch (error) {
        res.send(error)
    }
}
export const savePlatforms = async (req, res) => {
    const {
        entityId,

        name,
        platformUrl,
        customSettings,

    } = req.body
    try {
        if (
            entityId &&

            name &&
            platformUrl &&
            customSettings) {
            const data = new Platforms({
                entityId,

                name,
                platformUrl,
                customSettings,
            })
            res.send(await data.save())
        } else {
            throw "details are missing"
        }
    } catch (error) {
        res.send(error)
    }
}
export const saveTags = async (req, res) => {
    const {
        entityId,

        platformId,
        tag,
        in_menu
    } = req.body
    try {
        if (
            entityId &&

            platformId &&
            tag &&
            in_menu) {
            const data = new Tags({
                entityId,

                platformId,
                in_menu,
                tag,
            })
            res.send(await data.save())
        } else {
            throw "details are missing"
        }
    } catch (error) {
        res.send(error)
    }
}