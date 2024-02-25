import { useEffect, useState } from "react";

interface Products {
  id: number;
  image: any;
  title: string;
  price: any;
  rating: any;
}

const Product = () => {
  const [products, getProducts] = useState<Products[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((data) => data.json())
      .then((response) => {
        setLoader(false);
        getProducts(response);
        console.log("fetched");
        console.log(products);
      });
  }, []);

  const cards = (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="grid-cols-3">
          <div className="w-[18rem] mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 w-[16rem] rounded-t-lg"
                src={product.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
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
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <>
      {/* {loader ? <Spinners /> : { cards }} */}
      {cards}
    </>
  );
};

export default Product;
