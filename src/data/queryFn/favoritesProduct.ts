import {storage} from '@lib/storage/mmkv';
import {useState} from 'react';

const STORAGE_KEY = 'favorites-products';
export const favoritesProductFn = () => {
  const [favorites, setFavorites] = useState<boolean>();

  const getProductsId = (): number[] => {
    const data = storage.getString(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  };

  const saveProductsId = (id: number) => {
    const current = getProductsId();
    const updated = Array.from(new Set([...current, id]));
    setFavorites(prev => !prev);
    storage.set(STORAGE_KEY, JSON.stringify(updated));
  };

  const removeProduct = (id: number) => {
    const current = getProductsId();
    const updated = current.filter(item => item !== id);
    setFavorites(prev => !prev);
    storage.set(STORAGE_KEY, JSON.stringify(updated));
  };

  return {saveProductsId, removeProduct, getProductsId, favorites};
};
