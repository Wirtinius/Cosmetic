require("dotenv").config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes');
const brandRouter = require('./routes/brandRoutes');
const categoryRouter = require("./routes/categoryRoutes");
const orderRouter = require('./routes/orderRoutes');

const PORT = 3000

var app = express();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/') // Ensure this directory exists
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

const corsOptions = {
  origin: 'http://localhost:3001', 
  credentials: true, 
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use('/auth', userRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/brand', brandRouter);
app.use('/category', categoryRouter);
app.use('/order', orderRouter);


  mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

module.exports.app = app;
