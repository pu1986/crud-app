const express = require("express");
const cors = require("cors");
require("./config");

const productRoutes  = require("./routes/productRoutes");


const app = express();
app.use(cors());
app.use(express.json());


//Routes
app.use("/api/productRoutes", productRoutes);


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server runing on http://localhost:${PORT}`);
   //console.log(`Server running on http://localhost:${PORT}`);
})