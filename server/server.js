const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.port || 8080;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})