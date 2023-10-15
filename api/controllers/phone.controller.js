const db = require("../models");
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create phone
exports.create = (req, res) => {
    const phone = {
        name: req.body.name,
        number: req.body.number,
        contactID: req.body.contactID,
    } 
    Phones.create(phone)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred"
            });
        });
};

// Get all phones
exports.findAll = (req, res) => {
    Phones.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one phone by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Phones.findOne(req.body,{
        where: {id:id}
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred"
        });
    });
};

// Update one phone by id
exports.update = (req, res) => {
    const id = req.params.id;

    Phones.update(req.body, {
        where: {id:id}
    })
    .then(num => {
        if (num == 1 ){
            res.send({
                message: "Phone number was updated successfully."
            });
        } else {
            res.send({
                message: 'Cannot update Phone number'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Phone number with id=" + id
        });
    });
};

// Delete one phone by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Phones.destroy({
        where: { id:id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Phone number was deleted successfully!"
            });
        } else {
            res.send({
                message: 'Cannot delete Phone number'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error deleting Phone number with id=" + id
        });
    });
};