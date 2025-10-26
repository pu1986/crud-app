import { useState } from "react";
import { createProduct } from "../services/api";
import { useRouter } from "next/router";

export default function CreateProduct() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    productDecp: "",
    productDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(formData);
      alert("Product created successfully!");
      router.push("/"); // redirect to product list
    } catch (err) {
      console.error("Error creating product:", err);
      alert("Error creating product");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Product</h1>
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
          Create Product
        </button>
      </form>
    </div>
  );
}
