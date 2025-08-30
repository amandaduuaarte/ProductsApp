import {TSortByProps} from '@data/queryFn/getProducts';
import {useGetProductsService} from '@data/services/getProductsService';

export const useGetProductsUseCase = ({orderBy, sortBy}: TSortByProps) => {
  const {data, isError, isLoading, isRefetching, refetch} =
    useGetProductsService({
      orderBy,
      sortBy,
    });

  return {
    products: data,
    isError,
    isLoading: isLoading || isRefetching,
    isRefetching,
    refetch,
  };
};
