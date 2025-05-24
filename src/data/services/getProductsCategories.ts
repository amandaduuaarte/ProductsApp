import {getProductsCategoriesFn} from '@data/queryFn/getProductsCategories';
import {useQuery} from '@tanstack/react-query';

export const PRODUCTS_CATEGORIES_QUERY_KEY = 'PRODUCTS_CATEGORIES_KEY';

const {get} = getProductsCategoriesFn();

export const getProductsCategoriesService = ({limit = 4}: {limit?: number}) =>
  useQuery({
    queryFn: () => get(limit),
    queryKey: [PRODUCTS_CATEGORIES_QUERY_KEY],
  });
