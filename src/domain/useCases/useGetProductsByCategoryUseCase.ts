import {useGetProductsByCategoryService} from '@data/services/getProductsService';

export const useGetProductsByCategoryUseCase = ({
  category,
}: {
  category: string;
}) => {
  const {data, isLoading, isError, isRefetching, refetch} =
    useGetProductsByCategoryService({category});

  return {productsByCategory: data, isLoading, isError, isRefetching, refetch};
};
