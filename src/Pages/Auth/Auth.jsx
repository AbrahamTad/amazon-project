
import  { useState, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import { auth } from "../../Utility/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";


function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const [(user), dispatch] = useContext(DataContext);
  const [user, dispatch] = useContext(DataContext)
  console.log(user);



  const authHandler = async(e) => {
    e.preventDefault;
    console.log(e.target.name);

    if(e.target.name == "signin"){
      //firebase auth
      signInWithEmailAndPassword(auth, email, password)
     .then((userInfo) => {
     
          })
       dispatch({
         type: Type.SET_USER,
         user: userInfo.user,
       }).catch((err) => {
         console.log(err);
       });

    } else{ 
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        
      })
      ispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      }).catch((err) => {
        console.log(err);
      });
  }

  };




// console.log(password, email);

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
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

            {/* <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            /> */}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            {/* <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            /> */}
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
            Sign In{" "}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, and our Cookie Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create account btn */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registerBtn}
        >
          {" "}
          Create Your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
