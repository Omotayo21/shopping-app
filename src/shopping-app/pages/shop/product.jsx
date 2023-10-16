import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export const Product = (props) => {
    const { id, productName, price, productImage} = props.data;
    const dispatch= useDispatch();
    const addToCart = () => {
  dispatch(cartActions.addToCart({
      id,
      price,
      productName,
      productImage,
      })
      )
    };
 return(
    <div >
    
  <div className="grid justify-center">
  <div className="group border-gray-100/30 flex lg:w-64 max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-100 shadow hover:shadow-2xl hover:shadow-black ">
  
   <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl"></div>
   <Link to={`/person/${id}`}><img className="h-48 object-center sm:w-32  sm:h-24 lg:w-64 lg:h-48" src={productImage} /></Link>
    <div className="mt-4 px-5 pb-5">
      
        <h5 className="text-xl tracking-tight text-black">{productName}</h5>
      
      <div className="mt-2 mb-5 flex items-center justify-between">
        <p>
          <b className="text-4xl font-bold text-black">${price}</b>
          <b className="line-through text-sm text-black  rahman">$699</b>
        </p>
      </div>
      <button onClick={addToCart} className="ml-8 sm:ml-4 hover:border-black/40 flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
        < ShoppingCart size={25} />
        Add to cart</button>
        <p className="text-xs">*Click product image for more details</p>
    </div>
  </div>
</div>


    </div>
         )
};