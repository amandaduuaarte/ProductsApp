import {getProductsService} from '@data/services/getProductsService';

export const useGetProductsUseCase = () => {
  const {data, isError, isLoading, isRefetching, refetch} =
    getProductsService();

  return {
    products: data,
    isError,
    isLoading: isLoading || isRefetching,
    isRefetching,
    refetch,
  };
};
