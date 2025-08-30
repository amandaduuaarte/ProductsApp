import {useGetProductsCategoriesFn} from '@data/queryFn/getProductsCategories';
import {useQuery} from '@tanstack/react-query';

export const PRODUCTS_CATEGORIES_QUERY_KEY = 'PRODUCTS_CATEGORIES_KEY';

export const useGetProductsCategoriesService = ({limit}: {limit?: number}) => {
  const {get} = useGetProductsCategoriesFn();

  return useQuery({
    queryFn: () => get(limit),
    queryKey: [PRODUCTS_CATEGORIES_QUERY_KEY, limit],
  });
};
