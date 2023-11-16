const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.static(`${__dirname}/public`))
app.use(express.json())
app.use(cors())







app.listen(4000, () => console.log('Server running on 4000'))

