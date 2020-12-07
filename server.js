const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//panggil routes
const routes = require('./routes');
routes(app);

//daftarkan menu routes dari index
app.use('/auth', require('./middleware'))

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});