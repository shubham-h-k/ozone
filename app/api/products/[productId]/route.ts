// @ts-nocheck

export async function GET(request, { params }) {
  const { productId } = params;

  return Response.json({ productDetails: productId });
}
