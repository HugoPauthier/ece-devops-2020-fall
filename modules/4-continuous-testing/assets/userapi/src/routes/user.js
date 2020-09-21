const express = require('express')
const user = require('../controllers/user')

const userRouter = express.Router()

userRouter
  .post('/', (req, resp) => {
    user.create(req.body, (err, res) => {
      if(err) return resp.status(500).send(err)
      resp.status(201).send(res)
    })
  })

userRouter
  .get('/:username', (req, resp, next) => { // Express URL params - https://expressjs.com/en/guide/routing.html
    const username = req.params.username
    user.get(username, (err, res) => {
      if(err) return resp.status(500).send(err)
      return resp.status(200).send(res)
    })
  })
  
module.exports = userRouter
