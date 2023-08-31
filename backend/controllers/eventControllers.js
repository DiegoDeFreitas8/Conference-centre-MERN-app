const express = require('express');
const app = express();
const Events = require('../models/eventsModel');


//created my get function that will read all the data in my DB
exports.readEvents = function(req, res)  {
    Events.find()
    .then((data) => {
        res.send(data);
        console.log("Read Events...")
    })
    .catch((err) => {
        console.log(err)
    })
    
};

//created my create function that will add all the data in my DB
exports.createEvent = function(req, res) {
    const eventName = req.body.event;
    const date = req.body.date;
    const time = req.body.time;

    const event = new Events({
        event: eventName,
        date: date,
        time: time
    });

    event.save()
    .then((data) => {
        console.log("Events saved successfully...");
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    }); 
}

//created my update function that will update specific data in my DB
exports.updateEvent = function(req, res) {
    const id = req.body._id;
    const eventName = req.body.event;
    const date = req.body.date;
    const time = req.body.time;

    const todo = {
        event: eventName,
        date: date,
        time: time
    };

    Events.findByIdAndUpdate({_id: id}, todo, {new: true})
    .then((data) => {
        console.log("Event updated successfully...");
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    });
}

//created my delete function that will delete specific data in my DB
exports.deleteEvent = function(req, res){
    const id = req.body._id;

    Events.findByIdAndDelete({_id: id})
    .then(() => console.log("Deleted Event successfully..."))
    .catch((err) => {
        console.log(err);
    })
}