
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product = {}, flex, renderDesc }) {
  // Destructure properties from the product object, providing default values if missing.This ensures rating is always defined even if product.rating is not passed.
  const { image, title, id, rating = {}, price, description   } = product;
  

  return (
    <div
      className={`${classes.card__container} ${flex ? classes.product__flexed : ""}`}
    >
      {/* Clickable image that links to the product's details page */}
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} />
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>

        {/* Add to Cart button */}
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

// import Rating from "@mui/material/Rating";
// import CurrencyFomat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./Product.module.css";

// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//   const { image, title, id, rating, price } = product;
//   return (
//     <div className={`${classes.card__container} `}>
//       <Link to={`./products/${id}`}>
//         {/* <img src={image} alt="" className={classes.img_container} /> */}
//         <img src={image} alt="" className={classes.img_container} />
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         <div className={classes.rating}>
//           {/* rating */}
//           <Rating value={rating.rate} precision={0.1} />
//           {/* count */}
//           <small>{rating.count}</small>
//         </div>
//         <div>
//           {/*price */}
//           <CurrencyFomat amount={price} />
//         </div>
//         <button className={classes.button}>add to cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
