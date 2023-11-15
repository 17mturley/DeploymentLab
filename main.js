const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())







app.listen(4040, () => console.log('Server running on 4040'))

