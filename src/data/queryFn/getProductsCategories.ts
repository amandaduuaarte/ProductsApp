import {
  productsCategoriesSchema,
  TProductsCategories,
} from '@data/schema/productsCategories.schema';
import {httpClient} from '@lib/httpClient/axios';

const {api} = httpClient();
export const useGetProductsCategoriesFn = () => {
  const get = async (
    limit?: number,
  ): Promise<TProductsCategories | undefined> => {
    try {
      const response = await api.get(`/products/categories`);

      productsCategoriesSchema.parse(response.data);

      return response.data.slice(0, limit);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  return {get};
};
