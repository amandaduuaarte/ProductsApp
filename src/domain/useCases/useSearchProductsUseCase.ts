import {searchProducts} from '@data/services/getProductsService';

export const useSearchProductsUseCase = () => {
  const {mutate, isError} = searchProducts();

  return {searchProducts: mutate, isError};
};
