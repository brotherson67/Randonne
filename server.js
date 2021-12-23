// const express = require('express');
// // const db = require('./config/connection');
// const inputCheck = require('./utils/inputCheck');
// const apiRoutes = require('./controllers/apiRoutes');
// const routes = require('./controllers');
// const path = require('path');
// const sequelize = require('./config/connection');

// //set up handlebars as template 
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({
//   layoutsDir: path.join(__dirname, "views/layouts"),
//   partialsDir: path.join(__dirname, "views/partials")
// });


// const PORT = process.env.PORT || 3001;
// const app = express();

// // used with socket.io
// const http = require('http');
// const server = http.createServer(app);

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// //configure handlebars to be default view engine
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');



// // Default response for any other request (Not Found) // use as the last route because it will override the other routes
// app.use((req, res) => {
//     res.status(404).end();
// });

// // Start server after DB connection
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
//   sequelize.sync({ force: false });
// });

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// const hbs = exphbs.create({ helpers });

// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
