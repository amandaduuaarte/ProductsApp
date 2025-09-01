import {TSortByProps} from '@data/queryFn/getProducts';

enum ESortBy {
  Price = 'Price',
  Rating = 'Rating',
}

export type TStackRoutesProps = {
  Home?: TSortByProps;
  ProductDetails: {
    productId: number;
  };
  Categories: undefined;
  ProductsList: {category: string; sortBy?: ESortBy};
  BottomSheet: undefined;
  Search?: {
    isFocusOnInput: boolean;
  };
  Favorites: undefined;
  TabRoutes: undefined;
};
