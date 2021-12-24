const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));
// const hbs = exphbs.create({ helpers });
// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// // const express = require('express');
// const sequelize = require('./config/connection');
// const inputCheck = require('./utils/inputCheck');
// const apiRoutes = require('./controllers/api');
// const routes = require('./controllers');
// const path = require('path');

// const session = require('express-session');
// // const SequelizeStore = require('connect-session-sequelize')(session.Store);
// var Promise = global.Promise || require('promise');

// var express = require('express'),
//     exphbs  = require('express-handlebars'); // "express-handlebars"

// //set up handlebars as template 
// // const exphbs = require('express-handlebars');
// // Create `ExpressHandlebars` instance with a default layout.
// var hbs = exphbs.create({
//   layoutsDir: path.join(__dirname, "views/layouts"),
//   partialsDir: path.join(__dirname, "views/partials")
  
// });


// const PORT = process.env.PORT || 3001;
// const app = express();

// // const sess = {
// //   secret: 'Super secret secret',
// //   cookie: {},
// //   resave: false,
// //   saveUninitialized: true,
// //   store: new SequelizeStore({
// //     db: 
// //   })
// // };

// app.use('/', routes);
// //configure handlebars to be default view engine
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// // Express middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// // app.use(session(sess));




// // Default response for any other request (Not Found) // use as the last route because it will override the other routes
// app.use((req, res) => {
//     res.status(404).end();
// });

// // Start server after DB connection
// // sequelize.sync(err => {
// //     if (err) throw err;
// //     console.log('Database connected.');
// //     app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
// //   });
// // });

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });