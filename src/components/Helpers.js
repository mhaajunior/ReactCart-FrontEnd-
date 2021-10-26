export const priceFormat = (price) => {
  price = price.toFixed(2);
  price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return price;
};

export const calPriceDiscount = (price, discount) => {
  price = price - (discount / 100) * price;
  return priceFormat(price);
};
