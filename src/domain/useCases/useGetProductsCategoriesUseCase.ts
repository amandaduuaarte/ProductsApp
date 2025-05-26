import {getProductsCategoriesService} from '@data/services/getProductsCategoriesService';

export const useGetProductsCategoriesUseCase = ({limit}: {limit?: number}) => {
  const {data, isLoading, isError, isRefetching, refetch} =
    getProductsCategoriesService({limit});
  return {categories: data, isLoading, isError, isRefetching, refetch};
};
