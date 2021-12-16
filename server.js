const express = require('express');
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();



// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);




app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
});


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