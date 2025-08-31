import {TSortByProps} from '@data/queryFn/getProducts';
import {useSearchProductsService} from '@data/services/getProductsService';

export const useSearchProductsUseCase = ({orderBy, sortBy}: TSortByProps) => {
  const {mutate, isError} = useSearchProductsService({orderBy, sortBy});

  return {searchProducts: mutate, isError};
};
