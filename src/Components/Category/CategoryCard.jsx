
import PropTypes from "prop-types";
import classes from "./Category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

CategoryCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired, // `title` must be a string and is required
    imgLink: PropTypes.string.isRequired, // `imgLink` must be a string and is required
  }).isRequired, // `data` itself is required
};

export default CategoryCard;


// function CategoryCard({data}) {
  
//   return (
//     <div>
//       <a href="">
//         <span>
//           <h2>{data.title}</h2>
//         </span>
//         <img src={data.imgLink} alt="" />
//         <p>shop now</p>
//       </a>
//     </div>
//   );
// }

// export default CategoryCard;
