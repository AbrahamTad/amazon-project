import { useContext, useState, useEffect } from "react";
import { db } from "../../Utility/firebase"; // Firestore instance
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { DataContext } from "../../Components/DataProvider/DataProvider"; // Context for user data
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Orders.module.css";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext); // Get current user from context
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      unsubscribe = db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .onSnapshot((snapshot) => {
          console.log("snapshot", snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]); // Clear orders if user is not logged in
    }

    return () => {
      if (unsubscribe) unsubscribe(); // Unsubscribe when component unmounts
    };
  }, []);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && <p>No orders found.</p>}

          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order, index) => (
                  <ProductCard
                    key={index}
                    flex={true}
                    product={order} // Fix typo: `prodduct` -> `product`
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
