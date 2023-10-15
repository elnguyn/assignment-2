const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create contact
exports.create = (req, res) => {
    const contact = {
        name: req.body.name
    } 
    Contacts.create(contact)
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

// Get all contacts
exports.findAll = (req, res) => {
    Contacts.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one contact by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Contacts.findOne(req.body,{
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

// Update one contact by id
exports.update = (req, res) => {
    const id = req.params.id;

    Contacts.update(req.body, {
        where: {id:id}
    })
    .then(num => {
        if (num == 1 ){
            res.send({
                message: "Contact was updated successfully."
            });
        } else {
            res.send({
                message: 'Cannot update Contact'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Contact with id=" + id
        });
    });
};

// Delete one contact by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Contacts.destroy({
        where: { id:id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Contact was deleted successfully!"
            });
        } else {
            res.send({
                message: 'Cannot delete Contact'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error deleting Contact with id=" + id
        });
    });
};
