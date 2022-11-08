const express = require('express');
require("./config/db")
const app = express();

app.use(express.json())
app.use("/api/ads",require("./routes/api/add"))
const PORT = process.env.PORT || 3004

app.listen(PORT,()=>console.log("server started"));