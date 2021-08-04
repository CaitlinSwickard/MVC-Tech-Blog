// dependencies
// const path = require('path');
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
// const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

// express app
const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

// handlebars app
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('NOW LISTENING!!'));
});