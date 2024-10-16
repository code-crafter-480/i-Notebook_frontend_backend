const connectToMongo = require('./db')
const express = require('express')
const cors = require("cors")          // 👉 Add this in #65

connectToMongo()

const app = express()
// const port = 3000         // Our react app will run this port...
const port = 5000

app.use(cors())                // 👉 Add this in #65


//  Request.body korte gele amader akta middleware lage... and 'thunderclient' a body object ta type korte hobe...
app.use(express.json())


app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})