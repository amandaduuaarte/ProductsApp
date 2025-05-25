import {TSortByProps} from '@data/queryFn/getProducts';
import {getProductsService} from '@data/services/getProductsService';

export const useGetProductsUseCase = ({orderBy, sortBy}: TSortByProps) => {
  const {data, isError, isLoading, isRefetching, refetch} = getProductsService({
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
