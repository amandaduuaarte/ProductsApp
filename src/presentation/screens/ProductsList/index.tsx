import {TProduct} from '@data/schema/products.schema';
import {useGetProductsByCategoryUseCase} from '@domain/useCases/useGetProductsByCategoryUseCase';

import {TStackRoutesProps} from '@presentation/routes/types';
import {EmptyView} from '@presentation/shared/components/emptyView';
import {RetryView} from '@presentation/shared/components/retryView';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';

import {LoadingView} from './components/loadingView';
import {ProductCard} from './components/productCard';

type ProductListNavigationProp = StackNavigationProp<
  TStackRoutesProps,
  'ProductsList'
>;
type ProductListRouteProp = RouteProp<TStackRoutesProps, 'ProductsList'>;

type ProductListScreenProps = {
  navigation: ProductListNavigationProp;
  route: ProductListRouteProp;
};

export const ProductsList = ({route, navigation}: ProductListScreenProps) => {
  const {category} = route.params;
  const {navigate} = navigation;

  const {
    productsByCategory,
    isLoading: isLoadingProducts,
    isError,
    refetch,
    isRefetching,
  } = useGetProductsByCategoryUseCase({
    category,
  });

  const handleNavigationToDetailsScreen = useCallback(({id}: {id: number}) => {
    navigate('ProductDetails', {productId: id});
  }, []);

  const isLoading = isLoadingProducts || isRefetching;
  const renderProductCard = ({item}: ListRenderItemInfo<TProduct>) => {
    return (
      <ProductCard
        title={item.title}
        id={item.id}
        thumbnail={item.thumbnail}
        quantity={item.stock}
        price={item.price}
        onPress={handleNavigationToDetailsScreen}
      />
    );
  };

  if (isLoading) return <LoadingView />;

  if (isError) return <RetryView actionButton={refetch} />;

  return (
    <View style={styles.productList}>
      <FlatList
        data={productsByCategory?.products}
        renderItem={renderProductCard}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyView />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 24,
    padding: 24,
  },
  productList: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
