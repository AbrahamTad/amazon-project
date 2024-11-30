import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Api/endPoint";
import LayOut from "../../Components/LayOut/LayOut";
// import classes from "./ProductDetail.module.css";

import Loader from "../../Components/Loader/Loader";
import axios from "axios";
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={product} flex={true} renderDesc={true} />
      )}
    </LayOut>
  );
}

export default ProductDetail;
