import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./productCard.css";
// import ReactStars from "react-rating-stars-component"

const ProductCard = ({ product }) => {
//   const options = {
//     value: product.ratings,
//     readOnly: true,
//     precision: 0.5,
//   };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        {/* <Rating {...options} />{" "} */}
        <Rating 
          value={product.ratings || 0} 
          readOnly 
          precision={0.5} 
          size="small" 
        />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>

      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;


