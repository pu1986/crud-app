import Link from "next/link";
import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";
import ProductCard from "../components/ProductCard";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link href="/create">
          <button style={{ color: "green" }}>Add Product</button>
      </Link>
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
