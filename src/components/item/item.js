import React from 'react'
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./item.css"

const Items = ({data,addToCart }) => {

    const{id,image,title,price} =data;

 return(
   
       <>
       <div >
       <div className="card_pro rounded-3xl drop-shadow-xl hover:translate-y-6 ">
            <div>
                <img className="card_img mb-8 p-2 border-solid border-black rounded-3xl drop-shadow-xl" src={image} alt=""/>
            </div>
            <div className="mb-10 font-medium">
                <Link to={`/product/${id}`}>
                {title}
                </Link>
            </div>
            <div className="flex flex-wrap justify-between">
                <span className="card_price pl-7 text-emerald-800 text-2xl font-bold">${price}</span>
            <BsFillPlusSquareFill onClick={addToCart} className="text-2xl mr-7 text-emerald-900 hover:text-emerald-700 cursor-pointer"/>
            </div>
            </div>
        </div>
        </>
 )

}
export {Items};
