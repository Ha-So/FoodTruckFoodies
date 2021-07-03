const Truck = require("../models/truck-model");

createTruck = (req, res) => {
  const body = req.body;

  var keyName1 = req.body;
  console.log(keyName1);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a truck",
    });
  }

  const truck = new Truck(body);

  if (!truck) {
    return res.status(400).json({ success: false, error: err });
  }

  truck
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: truck._id,
        message: "Truck created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Truck not created!",
      });
    });
};

updateTruck = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Truck.findOne({ _id: req.params.id }, (err, truck) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Truck not found!",
      });
    }
    truck.name = body.name;
    truck.location = body.location;
    truck.official_location = body.official_location;
    truck.total_confirmed = body.total_confirmed;
    truck.time = body.time;
    truck
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: truck._id,
          message: "Truck updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Truck not updated!",
        });
      });
  });
};

deleteTruck = async (req, res) => {
  await Truck.findOneAndDelete({ _id: req.params.id }, (err, truck) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!truck) {
      return res.status(404).json({ success: false, error: `Truck not found` });
    }

    return res.status(200).json({ success: true, data: truck });
  }).catch((err) => console.log(err));
};

getTruckById = async (req, res) => {
  await Truck.findOne({ _id: req.params.id }, (err, truck) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!truck) {
      return res.status(404).json({ success: false, error: `Truck not found` });
    }
    return res.status(200).json({ success: true, data: truck });
  }).catch((err) => console.log(err));
};

getTrucks = async (req, res) => {
  await Truck.find({}, (err, trucks) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!trucks.length) {
      return res.status(404).json({ success: false, error: `Truck not found` });
    }
    return res.status(200).json({ success: true, data: trucks });
  }).catch((err) => console.log(err));
};

module.exports = {
  createTruck,
  updateTruck,
  deleteTruck,
  getTrucks,
  getTruckById,
};
