const express = require('express');
const {Router} = require('express');
const {readEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/eventControllers.js')
const {readLogin, createLogin } = require('../controllers/loginController.js')
const {checkJWTToken} = require('./middleware.js');
const router = Router();

//created all my routes 
router.post('/getEvents', checkJWTToken, readEvents);
router.post('/createEvent', createEvent);
router.put('/updateEvent', updateEvent);
router.delete('/deleteEvent', deleteEvent);
router.post('/getLogin', readLogin);
router.post('/createLogin', createLogin);


module.exports = router;