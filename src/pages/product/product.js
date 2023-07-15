import './product.css'
import { useEffect, useState } from "react"
import FakeStoreApi from '../../services/fakestoreapi'
import { Link, useParams } from "react-router-dom"
import { useCart } from '../../context/cart'
import { BsFillPlusSquareFill } from "react-icons/bs";

const Product = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const { productId } = useParams();
    const {addToCart}=useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const product = await FakeStoreApi.fetchProductsById(productId);
            setProduct(product);
            setLoading(false);
        }
        fetchProduct().catch(console.error)
    }, [productId])

    if (!loading && !product) {
        return (
            <div >
                <div >
                    <div >
                        Product not found. Please visit{" "}
                        <Link to="/" replace>
                            home
                        </Link>{" "}
                        to see all available products
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div >
            {loading ? (
                <div ></div>
            ) : (
                <div>
                    <div className="flex justify-between m-5 content-center single_body">
                        <div >
                            <img className="h-6/12 w-6/12" src={product.image} alt="" />
                        </div>
                        <div >
                            <div className="description w-6/12 ">
                                <h3 className="font-bold pb-4">{product.title}</h3>
                                <p>{product.description}</p>
                            </div>
                            <div className="flex  pt-10">
                                <span className="price text-emerald-800 text-2xl font-bold">${product.price}</span>
                                < BsFillPlusSquareFill className="text-2xl text-emerald-900 hover:text-emerald-700 cursor-pointer ml-14" onClick={(product)=> addToCart(product) }/>
                              
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export { Product }