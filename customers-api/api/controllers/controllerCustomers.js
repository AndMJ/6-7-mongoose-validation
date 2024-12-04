module.exports = () => {
    const modelCustomers = require("../models/modelCustomers")()

    const controller = {}
    controller.getCustomersList = async (req, res) => {
        const data = await modelCustomers.getList()
        return res.status(200).json(data)
    }

    return controller
}