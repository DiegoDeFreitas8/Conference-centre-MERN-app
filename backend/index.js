const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080
const uri = 'mongodb+srv://defreitasdiego360:Manchester8888@events.vsmlohb.mongodb.net/EventPlanner?retryWrites=true&w=majority'
const bodyParser = require('body-parser')
const cors = require("cors");
const routes = require('./routes/routes')
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routes) 
//imported all the necessary things needed for my backend
app.use(express.json());
//created my mongoDB connection using the connect function
mongoose.connect(
    uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))

//used .listen to listen on the port number i created
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
} )