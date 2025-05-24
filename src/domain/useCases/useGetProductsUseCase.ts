import {getProductsService} from '@data/services/getProductsService';

export const useGetProducts = () => {
  const {data, isError, isLoading, isRefetching} = getProductsService();
  return {data, isError, isLoading, isRefetching};
};
