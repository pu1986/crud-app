import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getProducts, updateProduct } from "../../services/api";

export default function UpdateProduct() {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    productDecp: "",
    productDetails: "",
  });

  // Fetch product data when page loads
  useEffect(() => {
    if (!id) return; // router query might be undefined at first
    const fetchProduct = async () => {
      try {
        const res = await getProducts();
        const product = res.data.find((p) => p._id === id);
        if (product) setFormData({
          productName: product.productName,
          price: product.price,
          productDecp: product.productDecp,
          productDetails: product.productDetails,
        });
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, formData);
      alert("Product updated successfully!");
      router.push("/"); // redirect to product list
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Error updating product");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label> <br />
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Price:</label> <br />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description:</label> <br />
          <input
            type="text"
            name="productDecp"
            value={formData.productDecp}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Details:</label> <br />
          <input
            type="text"
            name="productDetails"
            value={formData.productDetails}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Update Product
        </button>
      </form>
    </div>
  );
}
