const express = require('express');
const app = express();
const port = 8000;
require('./server/config/mongoose.config');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allUserRoutes = require('./server/routes/offer.routes');
allUserRoutes(app);

app.listen(port, () => {
    console.log("Server listening at port", port);
})