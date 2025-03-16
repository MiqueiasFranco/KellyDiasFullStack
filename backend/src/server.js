const app = require('./app')
require('dotenv').config()
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`server is runnning on port ${PORT}`))