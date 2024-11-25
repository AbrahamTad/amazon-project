
import { Link } from "react-router-dom";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section className={classes.header}>
        <div className={classes.header__container}>
          {/* Logo Section */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
                className={classes.logo}
              />
            </Link>
            {/* Delivery Section */}
            <div className={classes.delivery}>
              <SlLocationPin aria-label="Location Pin" />
              <div>
                <p>Delivered to</p>
                <span>Sweden</span>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className={classes.search}>
            <select name="" id="" className={classes.search__select}>
              <option value="">All</option>
            </select>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Product"
              className={classes.search__input}
            />
            <BsSearch size={25} className={classes.search__icon} />
          </div>

          {/* Right Side Section */}
          <div className={classes.order__container}>
            {/* Language Selector */}
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="US Flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </div>

            {/* Account Section */}
            <Link to="/auth">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>

            {/* Orders Section */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            {/* Cart Section */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} aria-label="Shopping Cart" />
              <span className={classes.cart__count}>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;



// // import React from "react";
// import { Link } from "react-router-dom";
// import classes from "./header.module.css";
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import LowerHeader from "./LowerHeader";

// const Header = () => {
//   return (
//     <>
//       <section className={classes.header}>
//         <div className={classes.header__container}>
//           {/* Logo Section */}
//           <div className={classes.logo__container}>
//             <a href="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="Amazon Logo"
//                 className={classes.logo}
//               />
//             </a>
//             {/* Delivery Section */}
//             <div className={classes.delivery}>
//               <SlLocationPin aria-label="Location Pin" />
//               <div>
//                 <p>Delivered to</p>
//                 <span>Sweden</span>
//               </div>
//             </div>
//           </div>

//           {/* Search Section */}
//           <div className={classes.search}>
//             <select name="" id="" className={classes.search__select}>
//               <option value="">All</option>
//             </select>
//             <input
//               type="text"
//               name=""
//               id=""
//               placeholder="Search Product"
//               className={classes.search__input}
//             />
//             <BsSearch size={25} className={classes.search__icon} />
//           </div>

//           {/* Right Side Section */}
//           <div className={classes.order__container}>
//             {/* Language Selector */}
//             <a href="#" className={classes.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                 alt="US Flag"
//               />
//               <select name="" id="">
//                 <option value="">EN</option>
//               </select>
//             </a>

//             {/* Account Section */}
//             <a href="/auth">
//               <div>
//                 <p>Sign In</p>
//                 <span>Account & Lists</span>
//               </div>
//             </a>

//             {/* Orders Section */}
//             <a href="/orders">
//               <p>Returns</p>
//               <span>& Orders</span>
//             </a>

//             {/* Cart Section */}
//             <a href="/cart" className={classes.cart}>
//               <BiCart size={35} aria-label="Shopping Cart" />
//               <span className={classes.cart__count}>0</span>
//             </a>
//           </div>
//         </div>
//       </section>
//       <LowerHeader />
//     </>
//   );
// };

// export default Header;

// // // import React from "react";
// // import classes from "./header.module.css";
// // import { SlLocationPin } from "react-icons/sl";
// // import { BsSearch } from "react-icons/bs";
// // import { BiCart } from "react-icons/bi";

// // const Header = () => {
// //   return (
// //     <section>
// //       <div className={classes.header__container}>
// //         {/* logo section */}
// //         <div className={classes.logo__container}>
// //           <a href="#">
// //             <img
// //               src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
// //               alt="amazon log"
// //             />
// //           </a>
// //           {/*delivery*/}
// //           <div className={classes.delivery}>
// //             <span>
// //               <SlLocationPin />
// //             </span>
// //             <div>
// //               <p>Delivered to</p> <span>Sweden</span>
// //             </div>
// //           </div>
// //         </div>
// //         <div>
// //           {/* section search */}
// //           <div className={classes.search}>
// //             <select name="" id="">
// //               <option value="">All</option>
// //             </select>
// //             <input type="text" name="" id="" placeholder="Search Product" />
// //             {/* icon */}
// //             <BsSearch size={25} />
// //           </div>
// //         </div>
// //         {/* right side link */}
// //         <div className={classes.order__container}>
// //           <div>
// //             <a href="" className={classes.language}>
// //               <img
// //                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
// //                 alt=""
// //               />

// //               <select name="" id="">
// //                 <option value="">EN</option>
// //               </select>
// //             </a>
// //             {/* three components */}
// //             <a href="">
// //               <p>Sign In</p>
// //               <span>Account & Lists</span>
// //             </a>
// //             {/* orders */}
// //             <a href="">
// //               <p>returns</p>
// //               <span>& Orders</span>
// //             </a>
// //             {/* cart */}
// //             <a href="" className={classes.cart}>
// //               <BiCart size={35} />
// //               <span>0</span>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Header;
