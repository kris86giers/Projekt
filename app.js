const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/404');
const app = express();

const adminData = require('./routes/admin');
const mainRoutes = require('./routes/main');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));


app.use(adminData.routes);
app.use(mainRoutes);

app.use(errorController.get404);

app.listen(3000);