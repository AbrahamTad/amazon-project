import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51QSiqgFHbec8SyThZdKYS1iNHfbYCJZiiyViuigCxATlzW9O6S4DQxLkklUUcaVVoeDjjGVbVzTeCWhIVfq97vLb00nhRbvC5m"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"You must log in to pay"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log in to view your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute
              msg={"You must log in to view your cart"}
              redirect={"/cart"}
            >
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./Pages/Landing/Landing";
// import Auth from "./Pages/Auth/Auth";
// import Payment from "./Pages/Payment/Payment";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// const stripePromise = loadStripe(
//   "pk_test_51QSiqgFHbec8SyThZdKYS1iNHfbYCJZiiyViuigCxATlzW9O6S4DQxLkklUUcaVVoeDjjGVbVzTeCWhIVfq97vLb00nhRbvC5m"
// );

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<Auth />} />

//         {/* Protected Routes */}
//         <Route
//           path="/payment"
//           element={
//             <ProtectedRoute
//               msg={"You must log in to proceed to payment"}
//               redirect={"/payment"}
//             >
//               <Elements stripe={stripePromise}>
//                 <Payment />
//               </Elements>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/orders"
//           element={
//             <ProtectedRoute
//               msg="You must log in to view your orders"
//               redirect="/orders"
//             >
//               <Orders />
//             </ProtectedRoute>
//           }
//         />

//         {/* Public Routes */}
//         <Route path="/category/:categoryName" element={<Results />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";
// import Landing from "./Pages/Landing/Landing";
// import Auth from "./Pages/Auth/Auth";
// import Payment from "./Pages/Payment/Payment";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// const stripePromise = loadStripe(
//   "pk_test_51QSiqgFHbec8SyThZdKYS1iNHfbYCJZiiyViuigCxATlzW9O6S4DQxLkklUUcaVVoeDjjGVbVzTeCWhIVfq97vLb00nhRbvC5m"
// );

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<Auth />} />
//         <Route
//           path="/payment"
//           element={
//             <ProtectedRoute
//               msg={"You must log in in to pay"}
//               redirect={"/payment"}
//             >
//               <Elements stripe={stripePromise}>
//                 <Payment />
//               </Elements>
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/category/:categoryName" element={<Results />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;
