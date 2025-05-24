import {getProducts} from '@data/services/getProductsService';

export const useGetProductsUseCase = () => {
  const {data, isError, isLoading, isRefetching} = getProducts();

  return {products: data, isError, isLoading, isRefetching};
};
