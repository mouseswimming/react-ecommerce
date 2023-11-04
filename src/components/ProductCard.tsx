import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { Product } from "../types";
import { MdAddShoppingCart, MdRemoveRedEye } from "react-icons/md";
import { addToCart } from "../store/CartSlice";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="grid">
      {/* iamges and buttons */}
      <div className="border cursor-pointer border-gray-200 relative overflow-hidden group transition h-[300px] w-full flex items-center">
        {/* product image */}
        <div className="flex justify-center w-full">
          <Link to={`/product/${product.id}`}>
            <img
              className="max-h-40 group-hover:scale-110 transition-transform duration-300 ease-in-out"
              src={product.image}
              alt={product.title}
            />
          </Link>
        </div>
        {/* buy & view button */}
        <div className="absolute top-2 bg-red-50 p-2 grid gap-2 text-xl opacity-0 -right-full shadow-md group-hover:opacity-100 group-hover:right-2 transition-all duration-300 ease-in-out">
          <button
            className="bg-red-500 p-2 text-white rounded-sm"
            aria-label="add to cart"
            onClick={() => dispatch(addToCart(product))}
          >
            <MdAddShoppingCart />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="bg-white p-2 rounded-sm"
          >
            <MdRemoveRedEye />
          </Link>
        </div>
      </div>
      {/* product informaiton */}
      <div className="grid gap-y-1 mt-4 mb-2">
        <p className="text-sm capitalize text-slate-400 font-medium">
          {product.category}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="hover:underline hover:text-red-700/60 line-clamp-2"
        >
          <h3>{product.title}</h3>
        </Link>
      </div>
      <p className="self-end font-semibold text-slate-700">${product.price}</p>
    </div>
  );
}
