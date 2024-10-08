export const sortData = [
  { label: "Price: Low to High", value: "price-low", id: "sort_option_1" },
  { label: "Price: High to Low", value: "price-high", id: "sort_option_2" },
];

export function formatCurrency(value: number): string {
  return `₹${new Intl.NumberFormat("en-IN").format(value)}`;
}
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-IN").format(value);
}

export function truncateTitle(title: string, charLen: number): string {
  if (title.length > charLen) {
    return title.slice(0, charLen).concat(" ...");
  }
  return title;
}

export function truncateTextByWords(text: string, maxWords: number): string {
  const textArr = text.split(" ");
  if (textArr.length > maxWords) {
    return textArr.slice(0, maxWords).join(" ").concat("...");
  }
  return text;
}
