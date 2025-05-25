import {getProductsCategoriesService} from '@data/services/getProductsCategoriesService';

export const useGetProductsCategoriesUseCase = ({limit}: {limit?: number}) => {
  const {data, isLoading, isError, isRefetching} = getProductsCategoriesService(
    {limit},
  );
  return {categories: data, isLoading, isError, isRefetching};
};
