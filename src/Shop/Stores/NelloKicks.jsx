import React, { useState, useEffect } from "react";
import { Navbar, Products } from "../components";
import { commerce } from "../../lib/commerce";

export const NelloKicks = () => {
  console.log("Hello");
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  

  console.log(products);

  return (
    <div className="NelloKicks">
      <Navbar />
      <Products products={products} />
    </div>
  );
};
