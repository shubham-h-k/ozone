"use server";

import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export async function addToCart(cartItem: {
  cart_id: number;
  product_item_id: number;
  qty: number;
}) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("shopping_cart_item")
    .insert([cartItem])
    .select();

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getAllProducts() {
  const supabase = createClient();
  const { data: products, error } = await supabase.from("product").select("*");

  if (error) {
    throw new Error(error.message);
  }

  // console.log(products);
  // await new Promise((res) => setTimeout(res, 5000));

  return products;
}

export async function getProductDetails(asin: string) {
  const supabase = createClient();

  const { data: product, error } = await supabase
    .from("product_details")
    .select("*")
    .eq("asin", asin)
    .single();

  if (error) {
    notFound();
  }

  return product;
}

export async function getProductReviews(asin: string) {
  const supabase = createClient();

  const { data: product, error } = await supabase
    .from("product_reviews")
    .select("*")
    .eq("asin", asin)
    .single();

  if (error) {
    notFound();
  }

  return product;
}

export async function getUser(userEmail: string) {
  const supabase = createClient();

  const { data: user, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", userEmail)
    .single();

  if (error) throw new Error(error.message);

  return user;
}
