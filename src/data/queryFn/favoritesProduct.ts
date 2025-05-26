import {storage} from '@lib/storage/mmkv';

const STORAGE_KEY = 'favorites-products';
export const favoritesProductFn = () => {
  const getProductsId = (): number[] => {
    const data = storage.getString(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  };

  const saveProductsId = (productsId: number[]) => {
    storage.set(STORAGE_KEY, JSON.stringify(productsId));
  };

  const saveProducts = (id: number) => {
    const current = getProductsId();
    if (!current.includes(id)) {
      const updated = [...current, id];
      saveProductsId(updated);
    }
  };

  const removeProduct = (productId: number) => {
    const current = getProductsId();
    const updated = current.filter(id => productId !== id);
    saveProductsId(updated);
  };

  return {saveProducts, removeProduct, getProductsId};
};
