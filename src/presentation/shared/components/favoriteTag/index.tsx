import {useFavoritesProductsUseCase} from '@domain/useCases/useFavoritesProductsUseCase';
import {useCallback} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
    <View>
      {isProductFav(productId) ? (
        <TouchableOpacity
          style={styles.favContainer}
          onPress={handleRemovingProductID}>
          <Text>Favorite ❤️</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.favContainer}
          onPress={handleSavingProductID}>
          <Text>Add Favorite</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  favContainer: {
    backgroundColor: '#ffc8dd',
    borderRadius: 16,
    padding: 12,
    width: '80%',
  },
});
