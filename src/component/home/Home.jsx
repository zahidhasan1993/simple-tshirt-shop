import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
  const shirtsData = useLoaderData();
  const [singleShirt, setSingleShirt] = useState([]);

  const handleBuyBtn = (product) => {
    // console.log(product);
    const exist = singleShirt.find((data) => data._id === product._id);
    if (exist) {
      toast('You Have Already Added This T-shirt');
    } else {
      const shirt = [...singleShirt, product];

      setSingleShirt(shirt);
    }
  };
  const handleRemovebtn = (id) => {
    // console.log(id);
    const remaining = singleShirt.filter((data) => data._id !== id);

    setSingleShirt(remaining);
  };
  // console.log(singleShirt);
  return (
    <div className="grid md:grid-cols-4 gap-8 my-12">
      <div className="grid md:grid-cols-3 md:col-span-3 gap-8">
        {shirtsData.map((shirtData) => (
          <Product
            key={shirtData._id}
            data={shirtData}
            handleBuyBtn={handleBuyBtn}
          ></Product>
        ))}
      </div>
      <div>
        <Cart data={singleShirt} handleRemovebtn={handleRemovebtn}></Cart>
      </div>
    </div>
  );
};

export default Home;
