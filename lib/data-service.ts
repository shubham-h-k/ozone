// import supabase from "@/lib/ssupabase";

import { createClient } from "@/lib/supabase/server";
const supabase = createClient();

// export const dynamic = "force-dynamic";
// export const revalidate = 1;

//  .select("*, cabins(*), guests(*)")

export async function getAllProducts() {
  const { data: products, error } = await supabase
    .from("product")
    .select("*, product_item(*)");
  // .select(
  //   "*, product_category(category_name), product_image(image_filename)"
  // );

  if (error) {
    throw new Error(error.message);
  }

  // console.log(products);
  // await new Promise((res) => setTimeout(res, 5000));

  return products;
}

export async function getProductDetails(asin: string) {
  const { data: products, error } = await supabase
    .from("product_details")
    .select("*")
    .eq("asin", asin)
    .single();

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return products;
}

export async function getProductCategoryNames() {
  const { data: product_category_names, error } = await supabase
    .from("product_category")
    .select("category_name")
    .order("category_name");

  // console.log(product_categories);

  if (error) {
    throw new Error(error.message);
  }

  return product_category_names;
}

export async function getProductsByCategory() {
  const { data: productsByCategories, error } = await supabase
    .from("product_category")
    .select("*, product(*)")
    .eq("category_name", "Mobile phones")
    .single();

  // console.log(productsByCategories);

  if (error) {
    throw new Error(error.message);
  }

  return productsByCategories;
}

export async function getUser(userEmail: string) {
  const { data: user, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", userEmail)
    .single();

  if (error) throw new Error(error.message);

  return user;
}

export async function getCartItems(userEmail: string) {
  const { data: cartItems, error } = await supabase
    .from("user")
    .select(
      "*, shopping_cart(*, shopping_cart_item(*, product_item(*, product(*))))"
    )
    .eq("email", userEmail)
    .single();

  if (error) throw new Error(error.message);

  // console.log(cartItems.shopping_cart[0].shopping_cart_item);

  return cartItems.shopping_cart[0].shopping_cart_item;
}
