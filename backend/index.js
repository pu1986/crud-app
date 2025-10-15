const express = require('express');
const cors = require('cors');
require("./config");
console.log("Hello Pankaj! Node project is working.");
const Product = require("./models/Product");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/createProduct", async(req, resp) => {
    try {
        let data = new Product(req.body);
        const result = await data.save();
        resp.status(201).send({
            message: "Product created!",
            product: result     
        });
    } catch (error){
        resp.status(500).send({
            message: "Error",
            error
        })
    }
});

app.get("/productList", async(req, resp) => {
    try{
        let data = await Product.find();
        resp.status(200).send(data);
    }catch (error){
        resp.status(500).send({
            message: "Error",
            error
        })
    }
})

app.put("/productUpdate/:_id", async(req, resp) => {
    try{
        let data = await Product.findByIdAndUpdate(
            req.params._id,
            { $set: req.body },
            { new : true }
        )
        resp.status(200).send({
            message: "Product updated successfully",
            product: data
        });
    }catch (error){
        resp.status(500).send({
            message: "Error updating product",
            error
        })
    }
})
app.delete("/productDelete/:_id", async(req, resp) => {
    try{
        let deleteProduct = await Product.findByIdAndDelete(req.params._id);
        if(!deleteProduct){
            return resp.status(404).send({ message: "Product not found" });
        }resp.status(200).send({
            message: "Product deleted successfully",
            product: deleteProduct
        })
    }
    catch(error){
        resp.status(500).send({
            message: "Error deleting product",
            error
        })
    }
})



app.listen(5001);