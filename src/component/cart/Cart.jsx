import React from "react";

const Cart = ({data,handleRemovebtn}) => {
    // console.log(data);
    let massege;
    if(data.length === 0){
     massege =  <h1>Buy Some Products</h1>
    }
    let total = 0;
    for(const dt of data){
        const price = dt.price;
        total = total + price
    }
  return (
    <div className=" bg-slate-200 sticky top-0">
      <h1 className="text-center text-xl font-bold pt-4 ">Shopping Cart</h1>
      <div className="ml-4 my-6 pb-6">
        {massege}
        <p className="font-bold">Total Price : ${total}</p>
        <p className="font-bold my-6 underline">Product Added:</p>
        {
            data.map(dt => <p key={dt._id}>{dt.name} <button onClick={() => handleRemovebtn(dt._id)} className="ml-5 btn">X</button></p>)
        }
        {
          data.length > 0 && <p className={`mt-10 ${data.length > 4 ? 'text-2xl text-blue-700 ' : 'text-xl text-red-700'}`}>{data.length > 4 ? 'Thanx for trusting us with that much products' : 'You can Buy More'}</p>
        }
      </div>
    </div>
  );
};

export default Cart;
