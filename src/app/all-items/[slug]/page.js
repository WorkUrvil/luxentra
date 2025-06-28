"use client";

import { useSearchParams } from "next/navigation";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

export default function ProductPage() {
  const params = useSearchParams();

  const product = {
    name: params.get("name"),
    image: params.get("image"),
    price: params.get("price"),
    description: params.get("description"),
    variants: JSON.parse(params.get("variants") || "[]"),
  };

  return <ProductDetail product={product} />;
}
