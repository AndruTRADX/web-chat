const express = require('express') 
const path = require('path') 
const isLogin = require('../middlewares/isLogin')

const router = express.Router()
const views = path.join(__dirname, '../views')


router.get('/', isLogin, (req, res) => {
  res.sendFile(views + '/index.html')
})

router.get('/register', (req, res) => {
  res.sendFile(views + '/register.html')
})

module.exports = router
