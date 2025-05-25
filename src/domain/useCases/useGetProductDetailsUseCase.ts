import {getProductsDetailsService} from '@data/services/getProductDetailsService';

export const useGetProductDetailsUseCase = ({id}: {id: number}) => {
  const {data, isError, isLoading, isRefetching, refetch} =
    getProductsDetailsService({
      id,
    });
  return {productDetails: data, isError, isLoading, isRefetching, refetch};
};
