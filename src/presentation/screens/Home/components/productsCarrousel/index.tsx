import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {TProduct, TProducts} from '@data/schema/products.schema';
import {useCallback} from 'react';
import {ProductCard} from '../productCard';

export const ProductsCarrousel = ({
  products,
}: {
  products: TProducts | undefined;
}) => {
  const renderProductCard = useCallback(
    ({item}: ListRenderItemInfo<TProduct>) => (
      <ProductCard
        name={item.title}
        category={item.category}
        price={item.price}
        thumbnail={item.thumbnail}
      />
    ),
    [],
  );

  return (
    <FlatList
      horizontal
      data={products?.products}
      renderItem={renderProductCard}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={<View />}
    />
  );
};
