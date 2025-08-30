import {useGetProductsCategoriesService} from '@data/services/getProductsCategoriesService';

export const useGetProductsCategoriesUseCase = (limit?: number) => {
  const {data, isLoading, isError, isRefetching, refetch} =
    useGetProductsCategoriesService({limit: limit ?? 4});
  return {categories: data, isLoading, isError, isRefetching, refetch};
};
