import {productDetailsSchema, TProduct} from '@data/schema/products.schema';

import {httpClient} from '@lib/httpClient/axios';

const {api} = httpClient();
export const getProductsDetailsFn = () => {
  const get = async (id: number): Promise<TProduct | undefined> => {
    try {
      const response = await api.get(`/products/${id}`);

      productDetailsSchema.parse(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  return {get};
};
