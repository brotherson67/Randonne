const express = require('express');
const db = require('./config/connection');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./controllers/apiRoutes');
const routes = require('./controllers');
const path = require('path');

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);


//set up handlebars as template 
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});


const PORT = process.env.PORT || 3001;
const app = express();

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// // used with socket.io
// const http = require('http');
// const server = http.createServer(app);

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use('/', routes);
//configure handlebars to be default view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// Default response for any other request (Not Found) // use as the last route because it will override the other routes
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});