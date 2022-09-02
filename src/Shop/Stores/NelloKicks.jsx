import React, { useState, useEffect } from "react";
import { Navbar, Products, TopBanner , Footer} from "../components";
import { commerce} from "../../lib/commerce";
import logo from "../../assets/images/nellokicks.png";

export const NelloKicks = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({limit:100,});

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const businessName = async () =>{
    const merchants = await commerce.merchants.about();

    return merchants.merchant.business_name
  }
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  console.log(cart);
  return (
    <div className="NelloKicks">
      <Navbar
        totalItems={cart.total_items || 0}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        oneUpdateCartQty={handleUpdateCartQty}
        onEmptyCart={handleEmptyCart}
      />
      <TopBanner logo={logo}/>
      <Products products={products} onAddToCart={handleAddToCart} />
      <Footer logo={logo} storename={businessName}/>
    </div>
  );
};
