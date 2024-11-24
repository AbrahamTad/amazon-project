import CategoryCard from "./CategoryCard";
import { categoryInfos } from "./categoryFullInfos";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => (
        // Use parentheses for directly returning JSX
        <CategoryCard data={infos} key={infos.title} />
      ))}
    </section>
  );
}

export default Category;

// import CategoryCard from "./CategoryCard";
// import { categoryInfos } from "./categoryFullInfos";

// function Category() {
//   return (
//     <section>
//       {categoryInfos.map((infos) => {
//         <CategoryCard data={infos} />;
//       })}
//     </section>
//   );
// }

// export default Category;
