import {
  getProductsFn,
  TProductsSearchProp,
  TSortByProps,
} from '@data/queryFn/getProducts';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export const PRODUCTS_QUERY_KEY = 'PRODUCTS_KEY';
export const PRODUCTS_BY_CATEGORY_QUERY_KEY = 'PRODUCTS_BY_CATEGORY_KEY';

const {getProducts, searchProducts, getProductsByCategory} = getProductsFn();

export const useGetProductsService = ({orderBy, sortBy}: TSortByProps) =>
  useQuery({
    queryFn: () => getProducts({orderBy, sortBy}),
    queryKey: [PRODUCTS_QUERY_KEY, orderBy, sortBy],
  });

export const useSearchProductsService = ({orderBy, sortBy}: TSortByProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({search}: {search: TProductsSearchProp}) =>
      searchProducts({search}),
    onSuccess: products => {
      queryClient.setQueryData([PRODUCTS_QUERY_KEY, orderBy, sortBy], products);
    },
  });
};

export const useGetProductsByCategoryService = ({
  category,
}: {
  category: string;
}) => {
  return useQuery({
    queryFn: () => getProductsByCategory({category}),
    queryKey: [PRODUCTS_BY_CATEGORY_QUERY_KEY, category],
  });
};
