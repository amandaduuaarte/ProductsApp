import {favoritesProductFn} from '@data/queryFn/favoritesProduct';

export const useFavoritesProductsUseCase = () => {
  const {saveProducts, removeProduct, getProductsId} = favoritesProductFn();

  const isProductFav = (productId: number) => {
    const current = getProductsId();
    return current.includes(productId);
  };

  return {saveProducts, removeProduct, isProductFav};
};
