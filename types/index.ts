interface productProps {
  id: number;
  created_at: string;
  asin: string;
  product_title: string;
  product_price: number;
  product_original_price: number;
  product_star_rating: number;
  product_num_ratings: number;
  product_photo: string;
  sales_volume: string;
  has_variations: boolean;
}

interface PropsProductVariation {
  asin: string;
  value: string;
  is_available: boolean;
  photo: string;
}

export type { productProps, PropsProductVariation };
