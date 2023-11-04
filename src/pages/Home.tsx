import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchProducts } from "../store/ProductSlice";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home() {
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const filterdProducts = products.filter(
    (product: Product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );

  console.log({ filterdProducts });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <section className="pt-16 pb-28">
        <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filterdProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
