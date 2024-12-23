const express = require('express');
require("dotenv").config();
const routes = require("./routes")

const porta = process.env.SERVER_PORT;
const host =  process.env.SERVER_HOST;


const app = express();
app.use(routes);
app.use(express.json());

app.listen(porta, host, () => {
    console.log(`executando na porta ${porta}`);
    
})
