import { toggleSidebar } from "../store/SidebarSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { IoMdArrowForward } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

import CartProductCard from "./CartProductCard";
import { clearCart } from "../store/CartSlice";

export default function Sidebar() {
  const { isOpen } = useAppSelector((state) => state.sidebar);
  const { cartProducts } = useAppSelector((state) => state.cart);
  const cartNumber = cartProducts.reduce((num, product) => {
    return num + product.quantity;
  }, 0);

  const total = cartProducts
    .reduce((cur, product) => {
      return cur + product.price * product.quantity;
    }, 0)
    .toFixed(2);

  const dispatch = useAppDispatch();
  return (
    <div
      className={`h-full w-full fixed shadow-2xl md:w-[50vw] lg:w-[35vw] p-4 transition-all duration-500 ease-in-out bg-white top-0 z-30 grid grid-rows-[auto_1fr_auto] gap-y-6 ${
        isOpen ? "right-0 " : "-right-full"
      }`}
    >
      {/* sidebar header */}
      <div className="flex justify-between pt-2 pb-4 border-b items-center">
        <span className="uppercase font-semibold text-sm">
          Shopping Bag ({cartNumber})
        </span>
        <button className="text-2xl" onClick={() => dispatch(toggleSidebar())}>
          <IoMdArrowForward />
        </button>
      </div>
      {/* cart products */}
      <div className="grid gap-y-4 place-content-start">
        {cartProducts.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* cart bottom */}
      <div className="pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="font-semibold uppercase">Total: {total}</span>
          <button
            className="text-lg bg-red-500 text-white p-2 hover:bg-red-600 transition duration-150"
            aria-label="empty cart"
            onClick={() => dispatch(clearCart())}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
        <button className="w-full py-4 text-white bg-primary mt-4 hover:bg-slate-700 transition duration-150">
          Checkout
        </button>
      </div>
    </div>
  );
}
