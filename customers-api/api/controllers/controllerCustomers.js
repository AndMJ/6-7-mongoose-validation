module.exports = () => {
    const module = require("../models/modelCustomers")()

    const controller = []
    controller.getCustomersList = async (req, res) => {
        const data = await module.getList()
        return res.status(200).json(data)
    }

    return controller
}