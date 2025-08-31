import {
  productsCategoriesSchema,
  TProductsCategories,
} from '@data/schema/productsCategories.schema';
import {httpClient} from '@lib/httpClient/axios';

const {api} = httpClient();
export const useGetProductsCategoriesFn = () => {
  const get = async (): Promise<TProductsCategories | undefined> => {
    try {
      const response = await api.get(`/products/categories`);

      productsCategoriesSchema.parse(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  return {get};
};
