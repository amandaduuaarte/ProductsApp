import {storage} from '@lib/storage/mmkv';

const STORAGE_KEY = 'favorites-products';
export const favoritesProductFn = () => {
  const getProductsId = (): number[] => {
    const data = storage.getString(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  };

  const saveProductsId = (id: number) => {
    const current = getProductsId();
    const updated = Array.from(new Set([...current, id]));
    storage.set(STORAGE_KEY, JSON.stringify(updated));
  };

  const removeProduct = (id: number) => {
    const current = getProductsId();
    const updated = current.filter(item => item !== id);
    storage.set(STORAGE_KEY, JSON.stringify(updated));
  };

  return {saveProductsId, removeProduct, getProductsId};
};
