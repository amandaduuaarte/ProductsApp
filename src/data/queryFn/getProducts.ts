/* eslint-disable no-console */
import {productsResponseSchema, TProducts} from '@data/schema/products.schema';
import {httpClient} from '@lib/httpClient/axios';

export type TProductsSearchProp = string;
const {api} = httpClient();

export const getProductsFn = () => {
  const get = async (): Promise<TProducts | undefined> => {
    try {
      const response = await api.get('/products');

      productsResponseSchema.parse(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const searchProductsFn = async ({
    search,
  }: {
    search: TProductsSearchProp;
  }): Promise<TProducts | undefined> => {
    try {
      const response = await api.get(`/products/search?q=${search}`);

      productsResponseSchema.parse(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  return {get, searchProductsFn};
};
