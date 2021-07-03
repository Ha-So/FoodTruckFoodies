const express = require('express')

const TruckCtrl = require('../controllers/truck-ctrl')
//const truckModel = require('../db/models/truck-model')

const router = express.Router()

router.post('/truck', TruckCtrl.createTruck)
router.put('/truck/:id', TruckCtrl.updateTruck)
router.delete('/truck/:id', TruckCtrl.deleteTruck)
router.get('/truck/:id', TruckCtrl.getTruckById)
router.get('/trucks', TruckCtrl.getTrucks)

module.exports = router