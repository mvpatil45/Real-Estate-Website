const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const authController = require('./controllers/authController')
const propertyController = require('./controllers/propertyController')
const uploadController = require('./controllers/uploadController');
const yachtController = require("./controllers/yachtController");
const userController = require("./controllers/userController");
const commentController = require("./controllers/commentController");

// db connecting
mongoose.set('strictQuery', false)

// mongoose.connect('mongodb+srv://admin:admin@cluster0.hwdfkke.mongodb.net/?retryWrites=true&w=majority', {
//     serverSelectionTimeoutMS: 5000
//   }).catch(err => console.log(err.reason));
//   .then(() => {
//     console.log('MongoDB Connected');
//   })

  mongoose.connect('mongodb+srv://admin:admin@cluster0.hwdfkke.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch((err) => {
      console.error(err);
    });
    
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authController);
app.use("/property", propertyController);
app.use("/yacht", yachtController);
app.use('/upload', uploadController)
app.use('/user', userController)
app.use('/comment', commentController)
app.use('/images', express.static('public/images'))

// starting server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server has been started"));