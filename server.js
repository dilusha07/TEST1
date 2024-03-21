const express = require("express");
const cors = require('cors');

const server = express();
const PORT = 3001;

server.listen(PORT, ()=>{
    console.log(`Server is running in port: ${PORT}`);
})