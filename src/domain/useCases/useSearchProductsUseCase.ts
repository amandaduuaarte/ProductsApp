import {searchProductsService} from '@data/services/getProductsService';

export const useSearchProductsUseCase = () => {
  const {mutate, isError, isIdle} = searchProductsService();

  return {searchProducts: mutate, isError, isIdle};
};
