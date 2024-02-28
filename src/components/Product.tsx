import { useEffect, useState } from "react";
import Spinners from "../Items/Spinners";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProduct } from "../store/productSlice";

export interface ProductsProp {
  id: number;
  image: any;
  title: string;
  price: any;
  rating: any;
}

const Product = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state: any) => state.products);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    dispatch(getProduct() as any);
    setLoader(false);
  }, []);

  const addToCart = (product: any) => {
    dispatch(add(product));
  };

  const cards = (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product: any) => (
        <div key={product.id} className="items-center">
          <div className="w-[18rem] mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className="p-2 pb-2 w-[18rem] rounded-2xl">
                <img
                  className="object-cover "
                  src={product.image}
                  alt="product image"
                />
              </div>
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="pt-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {product.rating[1]}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {product.price}
                </span>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return <>{loader ? <Spinners /> : <div className="mt-5">{cards}</div>}</>;
};

export default Product;
