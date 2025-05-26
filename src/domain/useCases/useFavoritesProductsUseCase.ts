import {favoritesProductFn} from '@data/queryFn/favoritesProduct';

export const useFavoritesProductsUseCase = () => {
  const {saveProductsId, removeProduct, getProductsId} = favoritesProductFn();

  const isProductFav = (productId: number) => {
    const current = getProductsId();
    return current.includes(productId);
  };

  return {saveProductsId, removeProduct, isProductFav};
};
