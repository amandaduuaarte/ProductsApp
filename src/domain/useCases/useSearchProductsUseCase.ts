import {TSortByProps} from '@data/queryFn/getProducts';
import {searchProductsService} from '@data/services/getProductsService';

export const useSearchProductsUseCase = ({orderBy, sortBy}: TSortByProps) => {
  const {mutate, isError} = searchProductsService({orderBy, sortBy});

  return {searchProducts: mutate, isError};
};
