module.exports = (app) => {
    const controllerCustomers = require("../controllers/controllerCustomers")()

    app.route("/api/v1/customers/list").get(controllerCustomers.getCustomersList)
}