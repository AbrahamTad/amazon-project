
import { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";

import ProductCard from "../../Components/Product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

import classes from "./Cart.module.css"; // Import CSS module

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext); // Destructure basket and user from state
  const total = basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your Shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>! No item in your cart</p>
          ) : (
            basket?.map((item, i) => (
              <ProductCard
                key={i}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
              />
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
              <Link to="/Payment">Continue to checkout</Link>
            </span>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;


// import { useContext } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import { DataContext } from "../../Components/DataProvider/DataProvider";

// import ProductCard from "../../Components/Product/ProductCard";
// import { Link } from "react-router-dom";
// import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

// // import classes from "./Cart.modules.css";

// function Cart() {
  
//   const [{ basket, user } = dispatch] = useContext(DataContext); // Destructure basket and user from state
//   // const { basket, user } = useContext(DataContext);
//   const total = basket?.reduce((amount, item) => item.price + amount, 0);

//   return (
//     <LayOut>
//       <section >
//         <div>

//           <h2>Hello</h2>
//           <h3>Your Shopping basket</h3>
//           <hr />
//           {basket?.length === 0 ? (
//             <p>! No item in your cart</p>
//           ) : (
//             basket?.map((item, i) => (
//               <ProductCard
//                 key={i}
//                 product={item}
//                 renderDesc={true}
//                 renderAdd={false}
//                 flex={true}
//               />
//             ))
//           )}
//         </div>
//         {basket?.length !== 0 && (
//           <div >
//             <div>
//               <p>Subtotal ({basket?.length} items)</p>
//               <CurrencyFormat amount={total} />
//             </div>
//             <span>
//               <input type="checkbox" />
//               <small>This order contains a gift</small>
//               <Link to="/Payment">Continue to checkout</Link>
//             </span>
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;
