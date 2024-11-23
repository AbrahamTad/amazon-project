import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";

const CarouselEffect = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
    >
      {img.map((imageItemLink, index) => (
        <div key={index} className={classes.hero__img}>
          <img src={imageItemLink} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselEffect;

// const CarouselEffect = () => {
//   return (
//     <div>
//       <Carousel
//         autoPlay={true}
//         infiniteLoop={true}
//         showIndicators={false}
//         showThumbs={false}
//       >
//         {img.map((imageItemLink, index) => (
//           <img key={index} src={imageItemLink} />
//         ))}
//       </Carousel>
//       <div className={classes.hero__img}></div>
//     </div>
//   );
// };

// export default CarouselEffect;
