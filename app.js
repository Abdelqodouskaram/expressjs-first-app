const express = require("express");
const path = require("path");

const app = express();
const bodyParser = require("body-parser");

const {router} = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require('./util/path');

//set the default template enginer
app.set('view engine', 'pug');

//set the directory of the template views
app.set('views', 'views');

//used to parse the body of the request
app.use(bodyParser.urlencoded({ extended: false }));

//used to serve the static file within specific directory
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", router);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 404})
});

app.listen(8080);
