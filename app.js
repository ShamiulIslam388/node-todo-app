const express = require('express')

require('dotenv').config({ path: './config/.env'})

const app = express()
const port = process.env.PORT;

app.listen(port,()=>console.log(`Server up and running at port ${port}`))