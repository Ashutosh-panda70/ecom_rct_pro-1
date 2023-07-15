import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useState,useEffect } from "react";
import logoimg from "../Images/Assurance & Suritylogo.png"
import "./navbar.css"
import { FaSearch } from "react-icons/fa";

const Navbar = ({onSearch, cartItemcount}) => {
    const[searchQuery,setSearchQuery]=useState(['']);

    const handelClick = () =>{
        if(searchQuery.trim().length){
            onSearch(searchQuery.trim());
        }
        else{
            setSearchQuery('');
        }
    }

    return(
        <>
        <div className="box-border p-2 bg-stone-100 ">
        <div className=" flex flex-row justify-between p-5 navbar stickey">
            <Link to="/">
            <div>
               <img className="h-30 w-20" src={logoimg}/>
            </div>
            </Link>
            <div>
                <input className="border-2 border-stone-400 searchbox" type="text" placeholder="search proudect..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                />
                <button onClick={handelClick} className="border-2 border-stone-400 pb-0.5 search_btn "><FaSearch/></button>
            </div>
            <Link to="/cart">
            <div>
            <div className="pt-5 text-4xl cart z-50 absolute ">
                <BsFillCartFill/>
            </div>
            
               {cartItemcount > 0 && (
                 <div className="cartCounter z-10 absolute mt-1 ml-3 text-yellow-600 text-xl font-bold">{cartItemcount <= 9 ? cartItemcount : "9+"}</div>
               )} 
            </div>
            </Link>
          <div>
          </div>
        </div>
        </div>
        </>
    )
}
export {Navbar};
//export default Navbar;



