import {useGetProductsDetailsFn} from '@data/queryFn/getProductDetails';

import {useQuery} from '@tanstack/react-query';

export const PRODUCTS_DETAILS_QUERY_KEY = 'PRODUCTS_DETAILS__QUERY_KEY';

export const useGetProductsDetailsService = ({id}: {id: number}) => {
  const {get} = useGetProductsDetailsFn();

  return useQuery({
    queryFn: () => get(id),
    queryKey: [PRODUCTS_DETAILS_QUERY_KEY, id],
  });
};
