import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";


function Auth() {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
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
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login__signInBtn}>Sign In </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, and our Cookie Notice and our Interest-Based Ads Notice.
        </p>
        {/* create account btn */}
        <button className={classes.login__registerBtn}> Create Your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth;
