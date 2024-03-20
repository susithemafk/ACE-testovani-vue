const dotenv = require("dotenv").config()
const baseUrl = `http://localhost:${process.env.VITE_DEV_PORT}`
module.exports = baseUrl
