import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/productlist" className="Button">
        ProductList
      </Link>
    </div>
  );
};

export default Home;
