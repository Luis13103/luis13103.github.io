require('dotenv').config();  

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('./config/passport-setup');  

const app = express();

console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);
console.log('SESSION_SECRET:', process.env.SESSION_SECRET);

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,  
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./routes/authRoutes'));  

app.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});
