/* eslint-disable no-console */
import {productsResponseSchema, TProducts} from '@data/schema/products.schema';
import {httpClient} from '@lib/httpClient/axios';

export type TProductsSearchProp = string;

export enum ESortBy {
  price = 'price',
  rating = 'rating',
}
export enum EOrderBy {
  than = 'desc',
  lest = 'asc',
}
export type TSortByProps = {
  sortBy?: ESortBy;
  orderBy?: EOrderBy;
};

const {api} = httpClient();

export const getProductsFn = () => {
  const getProducts = async ({
    sortBy,
    orderBy,
  }: TSortByProps): Promise<TProducts | undefined> => {
    try {
      let response;

      if (sortBy && orderBy) {
        response = await api.get(`/products?sortBy=${sortBy}&order=${orderBy}`);
      } else {
        response = await api.get('/products');
      }

      const parsed = productsResponseSchema.parse(response.data);

      return parsed;
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
