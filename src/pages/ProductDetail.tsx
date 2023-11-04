import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { fetchSingleProduct } from "../store/ProductSlice";
import { addToCart } from "../store/CartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const { curProduct, isLoading } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!id) return;
    const productId = parseInt(id);
    dispatch(fetchSingleProduct(productId));
  }, [id]);

  return (
    <div>
      {isLoading && (
        <div className="h-screen flex justify-center items-center">
          Page Loading ...
        </div>
      )}
      {!isLoading && (
        <section>
          {/* image */}
          <div className="container min-h-[calc(100vh-176px)] mx-auto grid gap-4 p-4 grid-cols-1 lg:grid-cols-[auto_1fr]">
            <div className="flex justify-center items-center">
              <img
                src={curProduct?.image}
                alt={curProduct?.title}
                className="max-w-[300px] lg:max-w-md p-8"
              />
            </div>
            {/* info and button */}
            <div className="text-center grid justify-center content-center gap-y-6 lg:text-left">
              <h1 className="text-3xl font-semibold text-primary max-w-[30ch]">
                {curProduct?.title}
              </h1>
              <p className="text-xl font-medium text-red-500 ">
                ${curProduct?.price}
              </p>
              <p className="max-w-[65ch] text-slate-700">
                {curProduct?.description}
              </p>
              <button
                className="bg-primary py-4 px-8 text-white w-max mt-4 hover:bg-red-500 transition duration-150"
                onClick={() => {
                  dispatch(addToCart(curProduct));
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
