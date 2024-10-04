import Header from "@/components/Header";
import ProductDetails from "@/components/shop/ProductDetails";
import ProductReviews from "@/components/shop/ProductReviews";
import Footer from "@/components/Footer";
import HorizontalRule from "@/components/HorizontalRule";

import { getProductDetails } from "@/lib/actions";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { product_title } = await getProductDetails(params.productId);
  return { title: product_title };
}

async function Page({ params }) {
  const { productId } = params;
  const productDetails = await getProductDetails(productId);

  return (
    <>
      <Header />
      <div className="max-width mt-8 md:mt-12 mb-4 md:mb-12 mx-auto padding-x font-medium">
        <ProductDetails productDetails={productDetails} />
        <HorizontalRule className="hidden md:block mt-4 mb-4" />
        <ProductReviews productDetails={productDetails} />
      </div>
      <Footer />
    </>
  );
}

export default Page;
