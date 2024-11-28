import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Api/endPoint";
import LayOut from "../../Components/LayOut/LayOut";
// import classes from "./ProductDetail.module.css";

// import Loader from "../../Components/Loader/Loader";
import axios from "axios";
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <ProductCard product={product} />
    </LayOut>
  );
}

export default ProductDetail;
