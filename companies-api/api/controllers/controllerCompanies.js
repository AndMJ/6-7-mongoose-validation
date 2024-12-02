const mongoose = require("mongoose");
const modelCompanies = require("../models/modelCompanies")(mongoose)

module.exports = () => {
    const controller = []

    //get company list
    controller.getCompaniesList = async (req, res) => {
        try {
            const data = await modelCompanies.getList()
            return res.status(200).json(data)
        } catch (e) {
            return res.status(404).json({
                code: 404,
                message: e.message
            })
        }
    }

    //get company by ID
    controller.getCompaniesByID = async (req, res) => {
        try {
            const data = await modelCompanies.getByID(req.params.id)
            return res.status(200).json(data)
        } catch (e) {
            return res.status(404).json({
                code: 404,
                message: e.message
            })
        }
    }

    return controller
}