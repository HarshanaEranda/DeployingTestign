
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
 
  res.send('Hello World!'+"My IP : "+ req.ip);
  res.send("My name is Harshana")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
