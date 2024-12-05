const Joi = require("joi")
module.exports = () => {
    const modelCustomers = require("../models/modelCustomers")()

    //TODO: apply JOI for validation, instead of using the mongoose validation
    // because if it isnt valid in the controller, it doenst iven pass to the model
    const customerValidationSchema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().pattern(/^(\+?351)?9\d\d{7}$/).required(), //PT phone number
        isPrime: Joi.boolean().required()
    })

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
            const newCustomer = {
                name: req.body.name.trim(),
                phone: req.body.phone.trim(),
                isPrime: req.body.isPrime
            }

            //data validation
            const result = customerValidationSchema.validate(newCustomer)
            if(result.error){
                return res.status(404).json({
                    code: 404,
                    message: result.error.details[0].message
                })
            }

            const data = await modelCustomers.create({...result.value})
            return res.status(200).json(data)

        } catch (e) {
            const errorList = []
            for(let err in e.errors){
                errorList.push(err)
            }

            return res.status(404).json({
                code: 404,
                message: errorList
            })
        }
    }

    controller.editCustomer = async (req, res) => {
        try {/*name: req.body.name.trim(),
                    phone: req.body.phone.trim(),
                    isPrime: req.body.isPrime*/
            //TODO: validate req.body
            const data = await modelCustomers.editByID(
                req.params.id, req.body
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