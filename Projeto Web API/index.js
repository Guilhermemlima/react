const express = require('express')
const cors = require('cors');
const gamesRoute = require('./src/route/games');
const app = express()
const port = 8888

app.use(cors())
app.use(express.json());

app.use("/games", gamesRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})