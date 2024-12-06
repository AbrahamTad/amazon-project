import react, { useContext } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  console.log(user);
  const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment__header}>
        Checkout({totalItems}) items
      </div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user.email}</div>
            <div>123 Rect Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />

        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment method</h3>
          <div>
            <div>
              <form action=""></form>
            </div>
            {/* yehen link tetekem video 25: dekika jemero
https://docs.stripe.com/sdks/stripejs-react */}
          </div>
          {/* <form>
            <input type="text" placeholder="Card number" />
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVC" />
            <input type="text" placeholder="Name on card" />
            <button type="submit">Place Order</button>
          </form> */}
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
