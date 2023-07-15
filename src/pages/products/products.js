import React,{useState,useEffect} from 'react'
import { Items } from '../../components/item';
import { useSearchParams } from 'react-router-dom';
import  FakeStoreApi  from '../../services/fakestoreapi';
import { useCart } from '../../context/cart';
import "./products.css"
import FadeLoder from "react-spinners/FadeLoader";
import  adimg from "../../Images/adlo.png"

const Products = () => {
  const [loading,setLoading]=useState(true);
  const [products ,setProducts]=useState([]);
  const [query ,setQury]=useSearchParams();  
  const {addToCart} =useCart();

  const searchQuery =query.get('q')

  useEffect( () => {
    const fetchProducts= async () => {
        setLoading(true);
        const products= searchQuery ? await FakeStoreApi.fetchProductsBySearchQuery(searchQuery) : await FakeStoreApi.fetchAllProducts();
        setProducts(products);
        setLoading(false);
    }
    fetchProducts();
  } ,[searchQuery])
 
  if(!loading && searchQuery && !products.length) {
    return(
        <div >
                <div >
                    <div>No products found matching your query.</div>
                </div>
            </div>
    )
  }
 
  return (
   <>
<img className="adimg" src={adimg}/>
<div>
    <div>
        <div className="bodyclr flex flex-wrap justify-between product_card">
            {loading ? (
                <div className="bg-orange-100 h-200 w-200 justify-self-center">
                    <FadeLoder />
                </div>
            ) :(
               products.map((product) =>(
                <Items key={product.id} data={product}
                addToCart={(product)=>addToCart(product)}/>
               ))
            )}
        </div>
    </div>
</div>
</>
)
               }

export {Products};
