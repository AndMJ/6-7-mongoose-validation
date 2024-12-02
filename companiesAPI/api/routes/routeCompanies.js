module.exports = (app) => {
    const controllerCompanies = require("../controllers/controllerCompanies")()

    app.route("/api/v1/companies/list", controllerCompanies.getCompaniesList())
}