import {
  getProductsFn,
  TProductsSearchProp,
  TSortByProps,
} from '@data/queryFn/getProducts';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export const PRODUCTS_QUERY_KEY = 'PRODUCTS_KEY';
export const PRODUCTS_SEARCHED_QUERY_KEY = 'PRODUCTS_SEARCH_KEY';
export const PRODUCTS_BY_CATEGORY_QUERY_KEY = 'PRODUCTS_BY_CATEGORY_KEY';

const {getProducts, searchProducts, getProductsByCategory} = getProductsFn();

export const getProductsService = ({orderBy, sortBy}: TSortByProps) =>
  useQuery({
    queryFn: () => getProducts({orderBy, sortBy}),
    queryKey: [PRODUCTS_QUERY_KEY, orderBy, sortBy],
  });

export const searchProductsService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({search}: {search: TProductsSearchProp}) =>
      searchProducts({search}),
    mutationKey: [PRODUCTS_SEARCHED_QUERY_KEY],
    onSuccess: products => {
      queryClient.setQueryData([PRODUCTS_QUERY_KEY], products);
    },
  });
};

export const getProductsByCategoryService = ({
  category,
}: {
  category: string;
}) => {
  return useQuery({
    queryFn: () => getProductsByCategory({category}),
    queryKey: [PRODUCTS_BY_CATEGORY_QUERY_KEY, category],
  });
};
