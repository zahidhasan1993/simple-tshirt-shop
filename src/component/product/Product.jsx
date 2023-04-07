import React from "react";

const Product = ({ data,handleBuyBtn }) => {
  // console.log(data);
  const { name, picture, price, gender } = data;
  return (
    <div className="card card-compact w-[100%] bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-[18rem] h-[18rem]"
          src={picture}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : ${price}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleBuyBtn(data)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
