import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductPage.scss";

const ProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { pathname } = useLocation();

  const id = pathname && pathname?.split("/")[2];

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:3300/products/${id}`);

        setSingleProduct(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [id]);

  return (
    <div className="product-page">
      <h1>{singleProduct?.name}</h1>
      <p>₹ {singleProduct?.price}</p>
    </div>
  );
};

export default ProductPage;
<h1></h1>;
