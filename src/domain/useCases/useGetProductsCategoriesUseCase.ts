import {useGetProductsCategoriesService} from '@data/services/getProductsCategoriesService';

export const useGetProductsCategoriesUseCase = ({limit}: {limit?: number}) => {
  const {data, isLoading, isError, isRefetching, refetch} =
    useGetProductsCategoriesService({limit});
  return {categories: data, isLoading, isError, isRefetching, refetch};
};
