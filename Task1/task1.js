function formatPrice(price) {
  const [integerPrice, decimalPrice] = price.split(".");
  const integerStr = Array.from(integerPrice)
    .reverse()
    .map((el, idx) => (idx % 3 === 0 ? el + " " : el))
    .reverse()
    .join("")
    .slice(0, -1);
  const formattedPrice = `${integerStr}.${decimalPrice}`;
  return formattedPrice;
}

formatPrice("3123123.00");