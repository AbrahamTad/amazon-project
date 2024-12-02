import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { useContext } from "react";


function ProductCard({ product = {}, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating = {}, price, description } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
    console.log("Added to basket:", { title });
  };

  return (
    <div
      className={`${classes.card__container} ${flex ? classes.product__flexed : ""}`}
    >
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
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
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
