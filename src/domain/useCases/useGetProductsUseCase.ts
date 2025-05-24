import {getProductsService} from '@data/services/getProductsService';

export const useGetProductsUseCase = () => {
  const {data, isError, isLoading, isRefetching} = getProductsService();
  return {products: data, isError, isLoading, isRefetching};
};
