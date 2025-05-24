import {productsResponseSchema} from '@data/schema/products.schema';
import {httpClient} from '@lib/httpClient/axios';

const {api} = httpClient();
export const getProductsFn = () => {
  const get = async () => {
    try {
      const response = await api.get('/products');

      productsResponseSchema.parse(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
  return {get};
};
