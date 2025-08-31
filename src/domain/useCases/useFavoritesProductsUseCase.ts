import {useFavoritesProductFn} from '@data/queryFn/favoritesProduct';

export const useFavoritesProductsUseCase = () => {
  const {saveProductsId, removeProduct, getProductsId, favorites} =
    useFavoritesProductFn();

  const isProductFav = (productId: number) => {
    const current = getProductsId();
    return current.includes(productId) || favorites;
  };

  return {saveProductsId, removeProduct, isProductFav};
};
