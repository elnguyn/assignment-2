const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create contact
exports.create = (req, res) => {
    const { name } = req.body;
  
    if (!name) {
      return res.status(400).send({ message: "Please fill in the name" });
    }
  
    const newContact = {
      name: name,
    };
  
    Contacts.create(newContact)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the contact.",
        });
      });
  };
  
  // Get all contacts
  exports.findAll = (req, res) => {
    Contacts.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving contacts.",
        });
      });
  };
  
  // Get one contact by id
  exports.findOne = (req, res) => {
    const Contactid = req.params.id;
  
    Contacts.findByPk(Contactid)
      .then((data) => {
        if (!data) {
          return res.status(404).send({ message: "Contact not found" });
        }
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving the contact.",
        });
      });
  };
  
  // Update one contact by id
  exports.update = (req, res) => {
    const Contactid = req.params.id;
    const { name } = req.body;
  
    Contacts.findByPk(Contactid)
      .then((contact) => {
        if (!contact) {
          return res.status(404).send({ message: "Contact not found" });
        }
  
        contact.name = name;
        contact
          .save()
          .then(() => {
            res.send(contact);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || "Some error occurred while updating the contact.",
            });
          });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving the contact.",
        });
      });
  };
  
  // Delete one contact by id
  exports.delete = (req, res) => {
    const Contactid = req.params.id;
  
    Contacts.destroy({
      where: { id: Contactid }
    })
      .then((num) => {
        if (num === 1) {
          res.send({ message: "Contact was deleted successfully!" });
        } else {
          res.status(404).send({ message: "Contact not found" });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while deleting the contact.",
        });
      });
  };