// // import classes from "./Cart.modules.css";
// import { useContext } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import ProductCard from "../../Components/Product/ProductCard";

// function Cart() {
//   const [{basket, user}, disppatch] = useContext(DataContext);
  
//   return (
//     <LayOut>
//       <section>
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
//                 flex={true}
//               />
//             ))
//           )}
//         </div>

//         <div></div>
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;


import  { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";

import ProductCard from "../../Components/Product/ProductCard";
import { Link } from "react-router-dom";



function Cart() {
  
  
  const [{ basket, user } = dispatch] = useContext(DataContext);; // Destructure basket and user from state

  return (
    <LayOut>
      <section>
        <div>
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
        {/* {basket?.length !== 0 && (
          <div>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount="total" />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
              <Link to="/Payment">Continue to checkout</Link>
            </span>
          </div>
        )} */}
       
      </section>
    </LayOut>
  );
}

export default Cart;
