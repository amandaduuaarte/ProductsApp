import {getProductsDetailsFn} from '@data/queryFn/getProductDetails';

import {useQuery} from '@tanstack/react-query';

export const PRODUCTS_DETAILS_QUERY_KEY = 'PRODUCTS_DETAILS__QUERY_KEY';

const {get} = getProductsDetailsFn();

export const getProductsDetailsService = ({id}: {id: number}) =>
  useQuery({
    queryFn: () => get(id),
    queryKey: [PRODUCTS_DETAILS_QUERY_KEY, id],
  });
