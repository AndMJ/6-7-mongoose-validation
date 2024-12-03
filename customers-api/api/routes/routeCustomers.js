module.exports = (app) => {
    const controller = require("../controllers/controllerCustomers")()

    app.route("/api/v1/customers/list").get(controller.getCustomersList)
}