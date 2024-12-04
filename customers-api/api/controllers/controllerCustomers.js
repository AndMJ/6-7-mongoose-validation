module.exports = () => {
    const modelCustomers = require("../models/modelCustomers")()

    const controller = {}
    controller.getCustomersList = async (req, res) => {
        try {
            const data = await modelCustomers.getList()
            return res.status(200).json(data)
        } catch (e) {
            return res.status(404).json({
                code: 404,
                message: e.message
            })
        }
    }

    controller.getCustomerByID = async (req, res) => {
        try {
            const data = await modelCustomers.getByID(req.params.id)
            return res.status(200).json(data)
        } catch (e) {
            return res.status(404).json({
                code: 404,
                message: e.message
            })
        }
    }

    controller.createCustomer = async (req, res) => {
        try {
            //TODO: apply JOI validation
            const data = await modelCustomers.create(
                {
                    name: req.body.name.trim(),
                    phone: req.body.phone.trim(),
                    isPrime: req.body.isPrime
                }
            )
            return res.status(200).json(data)
        } catch (e) {
            return res.status(404).json({
                code: 404,
                message: e.message
            })
        }
    }

    controller.editCustomer = async (req, res) => {
        try {
            const data = await modelCustomers.editByID(
                req.params.id,
                { //TODO: req.body?
                    /*name: req.body.name.trim(),
                    phone: req.body.phone.trim(),
                    isPrime: req.body.isPrime*/
                }
            )
            return res.status(200).json(data)
        } catch (e) {
            return res.status(404).json({
                code: 404,
                message: e.message
            })
        }
    }

    /*controller.patchCustomer = async (req, res) => {
        try {
            const data = await modelCustomers.patchByID(
                req.params.id,
                {
                    name: req.body.name.trim(),
                    phone: req.body.phone.trim(),
                    isPrime: req.body.isPrime
                }
            )
            return res.status(200).json(data)
        } catch (e) {
            return res.status(404).json({
                code: 404,
                message: e.message
            })
        }
    }*/

    controller.deleteCustomer = async (req, res) => {
        try {
            const data = await modelCustomers.deleteByID(req.params.id)
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