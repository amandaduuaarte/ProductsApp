import {getProductsFn} from '@data/queryFn/getProducts';
import {useQuery} from '@tanstack/react-query';

export const PRODUCTS_QUERY_KEY = 'PRODUCTS_KEY';
const FIVE_MINUTES = 5 * 60 * 1000;

const {get} = getProductsFn();

export const getProductsService = () =>
  useQuery({
    queryFn: get,
    queryKey: [PRODUCTS_QUERY_KEY],
    staleTime: FIVE_MINUTES,
  });
