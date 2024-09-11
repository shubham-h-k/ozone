import supabase from "@/lib/supabase";

// export const dynamic = "force-dynamic";
// export const revalidate = 1;

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
  }

  // console.log(products);
  // await new Promise((res) => setTimeout(res, 5000));

  return products;
}
