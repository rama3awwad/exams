const express = require('express');
const sequelize = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

const excelRoutes = require('./src/routes/excelRoutes');

app.use('/api', excelRoutes);

sequelize.sync({ force: false }) 
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
