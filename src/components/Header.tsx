import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleSidebar } from "../store/SidebarSlice";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Header() {
  const { cartProducts } = useAppSelector((state) => state.cart);
  const cartNumber = cartProducts.reduce((num, product) => {
    return num + product.quantity;
  }, 0);

  const dispatch = useAppDispatch();

  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    window.scrollY > 30 ? setIsActive(true) : setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between sticky top-0 z-20 transition duration-200  p-4 ${
        isActive ? "bg-slate-50 shadow-lg" : "bg-transparent"
      }`}
    >
      <Link to={"/"}>
        <img src="/logo.svg" alt="" />
      </Link>
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="text-3xl relative"
        aria-label="open shopping cart"
      >
        <MdOutlineShoppingBag />
        <span className="absolute text-xs text-white bg-red-500 rounded-full w-4 h-4 bottom-0 text-center">
          {cartNumber}
        </span>
      </button>
    </div>
  );
}
