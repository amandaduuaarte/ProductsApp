import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {TProduct, TProducts} from '@data/schema/products.schema';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TStackRoutesProps} from '@presentation/routes/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductCard} from '../productCard';

type THomeNavigationProp = StackNavigationProp<TStackRoutesProps, 'Home'>;

export const ProductsCarrousel = ({products}: {products?: TProducts}) => {
  const {navigate} = useNavigation<THomeNavigationProp>();

  const handleNavigationToDetailsScreen = useCallback(
    ({id}: {id: number}) => {
      navigate('ProductDetails', {productId: id});
    },
    [navigate],
  );

  const renderProductCard = useCallback(
    ({item}: ListRenderItemInfo<TProduct>) => (
      <ProductCard
        id={item.id}
        name={item.title}
        thumbnail={item.thumbnail}
        onPress={() => handleNavigationToDetailsScreen({id: item.id})}
      />
    ),
    [handleNavigationToDetailsScreen],
  );

  return (
    <FlatList
      horizontal
      data={products?.products}
      renderItem={renderProductCard}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={<View />}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
