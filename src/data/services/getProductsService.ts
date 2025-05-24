import {getProductsFn, TProductsSearchProp} from '@data/queryFn/getProducts';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export const PRODUCTS_QUERY_KEY = 'PRODUCTS_KEY';
export const PRODUCTS_SEARCHED_QUERY_KEY = 'PRODUCTS_SEARCH_KEY';

const {get, searchProductsFn} = getProductsFn();

export const getProducts = () =>
  useQuery({
    queryFn: get,
    queryKey: [PRODUCTS_QUERY_KEY],
  });

export const searchProducts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({search}: {search: TProductsSearchProp}) =>
      searchProductsFn({search}),
    mutationKey: [PRODUCTS_SEARCHED_QUERY_KEY],
    onSuccess: products => {
      queryClient.setQueryData([PRODUCTS_QUERY_KEY], products);
    },
  });
};
