import {getProductsByCategoryService} from '@data/services/getProductsService';

export const useGetProductsByCategoryUseCase = ({
  category,
}: {
  category: string;
}) => {
  const {data, isLoading, isError, isRefetching, refetch} =
    getProductsByCategoryService({category});

  return {productsByCategory: data, isLoading, isError, isRefetching, refetch};
};
