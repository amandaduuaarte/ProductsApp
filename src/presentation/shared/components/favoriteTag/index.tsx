import {useFavoritesProductsUseCase} from '@domain/useCases/useFavoritesProductsUseCase';
import {useCallback} from 'react';

import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const favoriteIcon = require('@assets/icons/favorite.png');
const favoriteOutlineIcon = require('@assets/icons/favoriteOutline.png');

export const FavoriteTag = ({productId}: {productId: number}) => {
  const {saveProductsId, isProductFav, removeProduct} =
    useFavoritesProductsUseCase();

  const handleRemovingProductID = useCallback(() => {
    removeProduct(productId);
  }, []);

  const handleSavingProductID = useCallback(() => {
    saveProductsId(productId);
  }, []);

  return (
    <View style={styles.container}>
      {isProductFav(productId) ? (
        <TouchableOpacity
          style={styles.favContainer}
          onPress={handleRemovingProductID}>
          <Image source={favoriteIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.favContainer}
          onPress={handleSavingProductID}>
          <Image source={favoriteOutlineIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  favContainer: {
    alignItems: 'center',
    backgroundColor: '#ffc8dd',
    borderRadius: 8,
    height: 45,
    padding: 12,
    width: 45,
  },
});
