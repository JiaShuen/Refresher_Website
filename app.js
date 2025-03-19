// Learning Express
const express = require('express')
const f1 = require('./model/db_connection.js')

const app = express()
const port = 8383

app.use(express.static('view/public'))
app.use(express.json())

// Learning Express

// app.get('/info/:dynamic', (req, res) => {
//   const { dynamic } = req.params
//   const { key } = req.query
//   console.log(dynamic, key)
//   res.status(200).json({info: 'preset text'})
// })

// app.post('/', (req, res) => {
//   const { parcel } = req.body
//   console.log(parcel)
//   if (!parcel) {
//     res.status(400).send({status: 'failed'})
//   }
//   res.status(200).send({status: 'received'})
// })

// -----------------------------------------------------------------------------------------------

app.get('/Address', (req, res) => {
  f1.getAddresses(function(err, result) {
    if (err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(result);
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}. Access via http://localhost:${port}/`)
});