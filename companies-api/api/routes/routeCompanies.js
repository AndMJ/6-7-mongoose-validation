module.exports = (app) => {
    const controllerCompanies = require("../controllers/controllerCompanies")()

    app.route("/api/v1/companies/list").get(controllerCompanies.getCompaniesList)
    app.route("/api/v1/companies/:id").get(controllerCompanies.getCompaniesByID)
}