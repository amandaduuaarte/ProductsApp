import {getProductsCategoriesService} from '@data/services/getProductsCategories';

export const useGetProductsCategoriesUseCase = ({limit}: {limit?: number}) => {
  const {data, isLoading, isError, isRefetching} = getProductsCategoriesService(
    {limit},
  );
  return {categories: data, isLoading, isError, isRefetching};
};
