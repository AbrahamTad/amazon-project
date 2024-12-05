import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

// const Type = { SET_USER: "SET_USER" };

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [user, dispatch] = useContext(DataContext);
  // const [(user), dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  // console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name === "signin") {
      //firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      //firebase auth
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
        });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInBtn}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        <p>
          <small>
            By signing-in you agree to AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, and our Cookie Notice and our
            Interest-Based Ads Notice.
          </small>
        </p>
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registerBtn}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;

//mukera hulet

// import { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import classes from "./SignUp.module.css";
// import { auth } from "../../Utility/firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";
// import { ClipLoader } from "react-spinners";

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState({
//     signIn: false,
//     signUp: false,
//   });

//   const [user, dispatch] = useContext(DataContext);
//   const navigate = useNavigate();

//   const authHandler = async (e) => {
//     e.preventDefault();
//     const { name } = e.target;

//     if (name === "signin") {
//       setLoading((prevState) => ({ ...prevState, signIn: true }));
//       signInWithEmailAndPassword(auth, email, password)
//         .then((userInfo) => {
//           dispatch({
//             type: Type.SET_USER,
//             user: userInfo.user,
//           });
//           setLoading((prevState) => ({ ...prevState, signIn: false }));
//           navigate("/");
//         })
//         .catch((err) => {
//           setError(err.message);
//           setLoading((prevState) => ({ ...prevState, signIn: false }));
//         });
//     } else if (name === "signup") {
//       setLoading((prevState) => ({ ...prevState, signUp: true }));
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userInfo) => {
//           dispatch({
//             type: Type.SET_USER,
//             user: userInfo.user,
//           });
//           setLoading((prevState) => ({ ...prevState, signUp: false }));
//           navigate("/");
//         })
//         .catch((err) => {
//           setError(err.message);
//           setLoading((prevState) => ({ ...prevState, signUp: false }));
//         });
//     }
//   };

//   return (
//     <section className={classes.login}>
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
//           alt="Amazon Logo"
//         />
//       </Link>
//       <div className={classes.login__container}>
//         <h1>Sign In</h1>
//         <form>
//           <div>
//             <label htmlFor="email">E-mail</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//               autoComplete="username"
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//           </div>
//           <button
//             type="submit"
//             onClick={authHandler}
//             name="signin"
//             className={classes.login__signInBtn}
//             disabled={loading.signIn}
//           >
//             {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
//           </button>
//         </form>
//         <p>
//           <small>
//             By signing-in you agree to AMAZON FAKE CLONE Conditions of Use &
//             Sale. Please see our Privacy Notice, and our Cookie Notice and our
//             Interest-Based Ads Notice.
//           </small>
//         </p>
//         <button
//           type="submit"
//           onClick={authHandler}
//           name="signup"
//           className={classes.login__registerBtn}
//           disabled={loading.signUp}
//         >
//           {loading.signUp ? (
//             <ClipLoader color="#000" size={15} />
//           ) : (
//             "Create Your Amazon Account"
//           )}
//         </button>
//         {error && (
//           <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Auth;

// import  { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import classes from "./SignUp.module.css";
// import { auth } from "../../Utility/firebase";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { DataContext } from "../../Components/DataProvider/DataProvider";

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // const [(user), dispatch] = useContext(DataContext);
//   const [user, dispatch] = useContext(DataContext)
//   console.log(user);

//   const authHandler = async(e) => {
//     e.preventDefault();
//     console.log(e.target.name);

//     if(e.target.name == "signin"){
//       //firebase auth
//       signInWithEmailAndPassword(auth, email, password)
//      .then((userInfo) => {

//           })
//        dispatch({
//          type: Type.SET_USER,
//          user: userInfo.user,
//        }).catch((err) => {
//           setError(err.message);
//        });

//     } else{
//       createUserWithEmailAndPassword(auth, email, password)
//       .then((userInfo) => {

//       })
//       dispatch({
//         type: Type.SET_USER,
//         user: userInfo.user,
//       }).catch((err) => {
//         setError(err.message);
//       });
//   }

//   };

// // console.log(password, email);

//   return (
//     <section className={classes.login}>
//       {/* logo */}
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
//           alt=""
//         />
//       </Link>
//       {/* form */}
//       <div className={classes.login__container}>
//         <h1>Sign In</h1>
//         <form action="">
//           <div>
//             <label htmlFor="email">E-mail</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//               autoComplete="username"
//             />

//             {/* <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//             /> */}
//           </div>

//           <div>
//             <label htmlFor="password">Password</label>
//             {/* <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//             /> */}
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//           </div>
//           <button
//             type="submit"
//             onClick={authHandler}
//             name="signin"
//             className={classes.login__signInBtn}
//           >
//             Sign In{" "}
//           </button>
//         </form>
//         {/* agreement */}
//         <p>
//           <small>
//             By signing-in you agree to AMAZON FAKE CLONE Conditions of Use &
//             Sale. Please see our Privacy Notice, and our Cookie Notice and our
//             Interest-Based Ads Notice. <Link to="/terms">Terms of Use</Link> and{" "}
//             <Link to="/privacy">Privacy Notice</Link> © 1996-2023, Amazon.com,
//             Inc. or its affiliates.
//           </small>
//         </p>
//         {/* create account btn */}
//         <button
//           type="submit"
//           onClick={authHandler}
//           name="signup"
//           className={classes.login__registerBtn}
//         >
//           {" "}
//           Create Your Amazon Account
//         </button>

//       {error && (
//         <small style={{paddingTop:"5px", color:"red"}}>{error}</small>)}
//             </div>
//     </section>
//   );
// }

// export default Auth;
