import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({ children, msg, redirect }) => {
  const navigate = useNavigate();
  const [{ user }] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user, navigate, msg, redirect]);

  // Render children if user is logged in
  return user ? children : null;
};

export default ProtectedRoute;

// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataProvider";

// const ProtectedRoute = ({ children, msg, redirect }) => {
//   const navigate = useNavigate();
//   const [{ user }, dispatch] = useContext(DataContext);

//   useEffect(() => {
//     if (!user) {
//       navigate("/auth", { state: { msg, redirect } });
//     }
//   }, [user]);

//   //   return children;
//   return children;
// };
// //payment ---> redirect to /auth(/)
// export default ProtectedRoute;
