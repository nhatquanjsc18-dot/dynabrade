import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllProducts, getCategories } from "@/lib/data";
import CatalogClient from "@/components/CatalogClient";

export const metadata: Metadata = {
  title: "Danh Mục Sản Phẩm",
  description:
    "Toàn bộ dụng cụ khí nén Dynabrade chính hãng phân phối bởi Nhất Quán tại Việt Nam.",
};

export default function CatalogPage() {
  const products = getAllProducts();
  const categories = getCategories();

  return (
    <div className="wrap">
      <Suspense fallback={<div className="py-20" />}>
        <CatalogClient products={products} categories={categories} />
      </Suspense>
    </div>
  );
}
