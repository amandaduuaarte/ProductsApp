import {z} from 'zod';

const categorySchema = z.object({
  slug: z.string(),
  name: z.string(),
  url: z.string(),
});

export const productsCategoriesSchema = z.array(categorySchema);

export type TProductsCategories = z.infer<typeof productsCategoriesSchema>;
export type TProductCategory = z.infer<typeof categorySchema>;
