import Link from "next/link";

export default function ProductCard({ product, onDelete }) {
  return (
    <tr>
      <td>{product.productName}</td>
      <td>${product.price}</td>
      <td>{product.productDecp}</td>
      <td>{product.productDetails}</td>
      <td>
        <button 
          onClick={() => onDelete(product._id)} 
          style={{ color: "red", marginRight: "10px" }}
        >
          Delete
        </button>
        <Link href={`/update/${product._id}`}>
          <button style={{ color: "green" }}>Update</button>
        </Link>
      </td>
    </tr>
  );
}
