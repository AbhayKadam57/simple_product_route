import { useEffect, useState } from "react";
import "./ProductList.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:3300/products");

        const data = res.data;

        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  return (
    <div className="product-list">
      {products?.map((item, id) => (
        <Link to={`/product/${item.id}`}>
          <div key={id} className="product">
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
