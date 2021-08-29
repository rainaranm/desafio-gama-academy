const express = require('express');
const CandidateController = require('./CandidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);

routes.get("/", (req,resp) => {
    resp.send("okay")
});

module.exports = routes;