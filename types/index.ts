interface productProps {
  id: number;
  created_at: string;
  updated_at: string | null;
  title: string;
  price: number;
  discount: number;
  image: string;
  thumbnail: string;
}

export type { productProps };
