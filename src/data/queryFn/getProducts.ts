/* eslint-disable no-console */
import {productsResponseSchema, TProducts} from '@data/schema/products.schema';
import {httpClient} from '@lib/httpClient/axios';

export type TProductsSearchProp = string;
const {api} = httpClient();

export const getProductsFn = () => {
  const getProducts = async (): Promise<TProducts | undefined> => {
    try {
      const response = await api.get('/products');

      productsResponseSchema.parse(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const searchProducts = async ({
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

  const getProductsByCategory = async ({
    category = 'smartphones',
  }: {
    category: string;
  }): Promise<TProducts | undefined> => {
    try {
      const response = await api.get(`/products/category/${category}`);

      productsResponseSchema.parse(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  return {getProducts, searchProducts, getProductsByCategory};
};
