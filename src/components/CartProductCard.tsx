import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { increaseQuantity, decreaseQuantity } from "../store/CartSlice";
import { useAppDispatch } from "../store/hooks";
import { CartProduct } from "../types";

type CartProductCardProps = {
  product: CartProduct;
};

export default function CartProductCard({ product }: CartProductCardProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-4 py-6 pr-6 border-b items-center  relative">
      <Link to={`/product/${product.id}`}>
        <img className="max-w-[80px]" src={product.image} alt={product.title} />
      </Link>
      <div className="flex-1">
        <p>{product.title}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2 border rounded border-gray-200 items-center">
            <button
              className="w-8 h-8 border-r hover:bg-gray-100"
              aria-label="reduce quantity by 1"
              onClick={() => dispatch(decreaseQuantity(product.id))}
            >
              -
            </button>
            <span className="w-6 text-center">{product.quantity}</span>
            <button
              className=" w-8 h-8 border-l hover:bg-gray-100"
              aria-label="increase quantity by 1"
              onClick={() => dispatch(increaseQuantity(product.id))}
            >
              +
            </button>
          </div>
          <span>${product.price}</span>
          <span>${(product.price * product.quantity).toFixed(2)}</span>
        </div>
      </div>
      <button className="absolute top-0 right-0">
        <MdOutlineClose />
      </button>
    </div>
  );
}
