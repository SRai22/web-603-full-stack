const mongoose = require('mongoose');
const Inventory = mongoose.model('Inventory');

// Create a new inventory
exports.createInventory = (req, res) => {
  const inventory = new Inventory({
    prodname: req.body.prodname,
    qty: req.body.qty,
    price: req.body.price,
    status: req.body.status
  });

  inventory.save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Inventory."
      });
    });
};

// Retrieve a single inventory by id
exports.getInventory = (req, res) => {
  Inventory.findById(req.params.id).select('-__v')
    .then(inventory => {
      if (!inventory) {
        return res.status(404).send({
          message: "Inventory not found with id " + req.params.id
        });
      }
      res.status(200).json(inventory);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Inventory not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error retrieving inventory with id " + req.params.id
      });
    });
};

// Retrieve all inventories
exports.inventories = async (req, res) => {
    Inventory.find().select('-__v')
    .then(inventoryInfos => {
            res.status(200).json(inventoryInfos);
        })
    .catch (err => {
        console.log(err);
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving inventory."
        });
    });
};

// Update an inventory
exports.updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(
      req.body._id,
      {
        prodname: req.body.prodname,
        qty: req.body.qty,
        price: req.body.price,
        status: req.body.status
      },
      { new: false }
    ).select('-__v');

    if (!inventory) {
      return res.status(404).send({
        message: "Inventory not found with id " + req.body._id
      });
    }
    res.status(200).json(inventory);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Inventory not found with id " + req.body._id
      });
    }
    return res.status(500).send({
      message: "Error updating inventory with id " + req.body._id
    });
  }
};

// Delete an inventory
exports.deleteInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id).select('-__v');

    if (!inventory) {
      return res.status(404).send({
        message: "Inventory not found with id " + req.params.id
      });
    }
    res.status(200).json({ });
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Inventory not found with id " + req.params.id
      });
    }
    return res.status(500).send({
      message: "Could not delete inventory with id " + req.params.id
    });
  }
};
