
import { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext); // Destructure basket and user from state
  const total = basket?.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );
const increment = (item) => {
  dispatch({
    type:Type.ADD_TO_BASKET,
    item,
  })
}
const decrement = (id) => {
  dispatch({
    type: Type.REMOVE_FROM_BASKET,
    id
  })
}

  return (
    <LayOut>
      <div className={classes.mainContainer}>
        <section className={classes.container}>
          <div className={classes.cart__container}>
            {/* <h2>Hello, {user?.name || "Guest"}</h2> */}
            <h2>
              {" "}
              <p>
                Hello, {user?.displayName || user.email?.split("@")[0]}
              </p>{" "}
            </h2>
            <h3>Your Shopping Basket</h3>
            <hr />
            {basket?.length === 0 ? (
              <div className={classes.emptyCart}>
                <p>No items in your cart</p>
                <Link to="/" className={classes.Start_Shopping}>
                  Start Shopping
                </Link>
              </div>
            ) : (
              basket?.map((item, i) => (
                // eslint-disable-next-line react/jsx-key
                <section className={classes.cart_product}>
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={classes.btn__container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              ))
            )}
          </div>
        </section>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div className={classes.subtotal__details}>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <div>
              <input type="checkbox" id="gift" />
              <label htmlFor="gift">
                <small>This order contains a gift</small>
              </label>
            </div>
            <Link to="/Payment">Continue to checkout</Link>
          </div>
        )}
      </div>
    </LayOut>
  );
}

export default Cart;



