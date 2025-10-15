const Product = require("../models/Product");

// 🟢 Create Product
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const result = await product.save();
        res.status(201).send({ message: "Product created!", product: result });
    } catch (error) {
        res.status(500).send({ message: "Error creating product", error });
    }
};

// 🟢 Get All Products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ message: "Error fetching products", error });
    }
};

// 🟢 Update Product
exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,     // ✅ id instead of _id
            { $set: req.body },
            { new: true }
        );
        if (!updated) return res.status(404).send({ message: "Product not found" });
        res.status(200).send({ message: "Product updated", product: updated });
    } catch (error) {
        res.status(500).send({ message: "Error updating product", error });
    }
};

// 🟢 Delete Product
exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id); // ✅ id instead of _id
        if (!deleted) return res.status(404).send({ message: "Product not found" });
        res.status(200).send({ message: "Product deleted", product: deleted });
    } catch (error) {
        res.status(500).send({ message: "Error deleting product", error });
    }
};
