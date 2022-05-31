const { request } = require("express");
const { get } = require("../routes");


const controller = {
    personajeRandom: (req,res) => {
        (res.render("index"))        
    }
};


module.exports = controller