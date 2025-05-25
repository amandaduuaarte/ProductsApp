import {searchProductsService} from '@data/services/getProductsService';

export const useSearchProductsUseCase = () => {
  const {mutate, isError} = searchProductsService();

  return {searchProducts: mutate, isError};
};
