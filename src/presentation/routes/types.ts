enum ESortBy {
  Price = 'Price',
  Rating = 'Rating',
}

export type TStackRoutesProps = {
  Home: undefined;
  ProductDetails: {
    productId: number;
  };
  Categories: undefined;
  ProductsList: {category: string; sortBy?: ESortBy};
};
