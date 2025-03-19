const app = require('./app')
require('dotenv').config()
const PORT = process.env.PORT || 3333
const DB = process.env.MYSQL_DB
const HOST = process.env.MYSQL_HOST
const password = process.env.MYSQL_PASSWORD 
const USER = process.env.MYSQL_USER 
app.listen(PORT, () => console.log(`server is runnning on port ${PORT},DB:${DB}, HOST:${HOST}, PSW:${password}, USER:${USER}`))