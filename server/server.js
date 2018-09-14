const express = require('express');
const apiRouter = require('./routes');
const cors = require('cors');
const PORT = 3000;

let app = express();

app.use(cors());
app.use(express.json());

app.use('/api',apiRouter);









app.listen(PORT);




