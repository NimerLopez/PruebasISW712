const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use('/',routes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
//docker build -t nodejs-api .
//docker run -it -p 4000:3000 nodejs-api