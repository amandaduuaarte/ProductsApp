import {useFavoritesProductsUseCase} from '@domain/useCases/useFavoritesProductsUseCase';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const FavoriteTag = ({productId}: {productId: number}) => {
  const {saveProductsId, isProductFav, removeProduct} =
    useFavoritesProductsUseCase();

  return (
    <View>
      {isProductFav(productId) ? (
        <TouchableOpacity
          style={styles.favContainer}
          onPress={() => removeProduct(productId)}>
          <Text>Favorite ❤️</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.favContainer}
          onPress={() => saveProductsId(productId)}>
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
