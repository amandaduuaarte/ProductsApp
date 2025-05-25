import {getProductsByCategoryService} from '@data/services/getProductsService';

export const useGetProductsByCategoryUseCase = ({
  category,
}: {
  category: string;
}) => {
  const {data, isLoading, isError, isRefetching} = getProductsByCategoryService(
    {category},
  );

  return {productsByCategory: data, isLoading, isError, isRefetching};
};
