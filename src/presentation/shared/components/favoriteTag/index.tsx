import {useFavoritesProductsUseCase} from '@domain/useCases/useFavoritesProductsUseCase';
import {useCallback} from 'react';

import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

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

  const renderFavButton = ({
    icon,
    onPress,
  }: {
    icon: ImageSourcePropType;
    onPress(): void;
  }) => (
    <TouchableOpacity style={styles.favContainer} onPress={onPress}>
      <Image source={icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isProductFav(productId)
        ? renderFavButton({icon: favoriteIcon, onPress: handleSavingProductID})
        : renderFavButton({
            icon: favoriteOutlineIcon,
            onPress: handleRemovingProductID,
          })}
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
