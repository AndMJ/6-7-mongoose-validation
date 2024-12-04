module.exports = (app) => {
    const controllerCustomers = require("../controllers/controllerCustomers")()

    app.route("/api/v1/customers/list").get(controllerCustomers.getCustomersList)
    app.route("/api/v1/customers/:id").get(controllerCustomers.getCustomerByID)
    app.route("/api/v1/customers/create").post(controllerCustomers.createCustomer)
    app.route("/api/v1/customers/edit/:id").put(controllerCustomers.editCustomer)
    app.route("/api/v1/customers/delete/:id").delete(controllerCustomers.deleteCustomer)
}