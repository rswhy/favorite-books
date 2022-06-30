if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express')

require('./config/mongoConnection')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json());
const Controller = require('./controllers/controller')
const port = process.env.PORT || 3000

app.get('/books', Controller.allFavorite)
app.post('/books', Controller.addFavorite)

app.listen(port, () => {
  console.log(`listening at port : ${port}`);
})