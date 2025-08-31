import {useFavoritesProductsUseCase} from '@domain/useCases/useFavoritesProductsUseCase';
import {useCallback} from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';

import FavIconOutline from '@assets/icons/favIconOutline.svg';
import FavIcon from '@assets/icons/favIcon.svg';

export const FavoriteTag = ({productId}: {productId: number}) => {
  const {saveProductsId, isProductFav, removeProduct} =
    useFavoritesProductsUseCase();

  const handleRemovingProductID = useCallback(() => {
    removeProduct(productId);
  }, [productId, removeProduct]);

  const handleSavingProductID = useCallback(() => {
    saveProductsId(productId);
  }, [productId, saveProductsId]);

  return (
    <View>
      {isProductFav(productId) ? (
        <TouchableOpacity
          onPress={handleRemovingProductID}
          style={styles.container}>
          <FavIcon />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleSavingProductID}
          style={styles.container}>
          <FavIconOutline />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
  },
});
