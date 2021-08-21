const express = require('express')
const todoCtrl = require('../controllers/Todo.controller')

const router = express.Router()

router.get('/' , todoCtrl.list)
router.post('/create' , todoCtrl.create)
router.get('/:id/delete' , todoCtrl.remove)
router.get('/:id/single' , todoCtrl.getOne)
router.post('/:id/update' , todoCtrl.update)

module.exports = router