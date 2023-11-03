import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchProducts } from "../store/ProductSlice";

export default function Home() {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  console.log({ products });
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <div>Home</div>;
}
