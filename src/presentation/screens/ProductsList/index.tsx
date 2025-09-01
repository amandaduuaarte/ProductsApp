import {TProduct} from '@data/schema/products.schema';
import {useGetProductsByCategoryUseCase} from '@domain/useCases/useGetProductsByCategoryUseCase';
import {formatter} from '@domain/utils/formatterMoney';
import {TStackRoutesProps} from '@presentation/routes/types';
import {EmptyView} from '@presentation/shared/components/emptyView';
import {RetryView} from '@presentation/shared/components/retryView';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback} from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FavoriteTag} from '@presentation/shared/components/favoriteTag';
import {LoadingView} from './components/loadingView';

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
  const {formatterMoney} = formatter;

  const handleNavigationToDetailsScreen = useCallback(
    ({id}: {id: number}) => {
      navigate('ProductDetails', {productId: id});
    },
    [navigate],
  );

  const isLoading = isLoadingProducts || isRefetching;
  const renderProductCard = ({item}: ListRenderItemInfo<TProduct>) => {
    return (
      <TouchableOpacity
        style={styles.border}
        onPress={() => handleNavigationToDetailsScreen({id: item.id})}>
        <View style={{alignSelf: 'flex-end'}}>
          <FavoriteTag productId={item.id} />
        </View>

        <View style={styles.content}>
          <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />

          <View style={{width: '70%'}}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.price}>{formatterMoney(item.price)}</Text>

            <Text
              numberOfLines={2}
              style={styles.description}
              ellipsizeMode="tail">
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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
  border: {
    borderColor: '#415a77',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
  },
  container: {
    gap: 24,
    padding: 24,
  },

  content: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  description: {
    marginTop: 12,
  },
  price: {
    color: '#001d3d',
    fontSize: 16,
    fontWeight: 700,
    marginVertical: 8,
  },
  productList: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  thumbnail: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
});
