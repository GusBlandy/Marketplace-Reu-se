const express = require('express');
require('./src/config/dotenv')();
require('./src/config/sequelize');
require('./src/config/Auth');
var session = require('express-session');


const app = express();
const port = process.env.PORT;
//const cors = require('cors');
const routes = require('./src/routes/routes');

const passport = require('passport');
require('./src/middlewares/jwtPassport')(passport);
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'bla bla bla' 
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);


app.get('/', (req, res) => {
  res.send('Squad 6!!')
});

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
    