import {useGetProductDetailsUseCase} from '@domain/useCases/useGetProductDetailsUseCase';
import {formatter} from '@domain/utils/formatterMoney';
import {TStackRoutesProps} from '@presentation/routes/types';
import {RetryView} from '@presentation/shared/components/retryView';
import {RouteProp} from '@react-navigation/native';

import {Image, StyleSheet, Text, View} from 'react-native';
import {LoadingView} from './components/loadingView';

type ProductDetailsScreenRouteProp = RouteProp<
  TStackRoutesProps,
  'ProductDetails'
>;

type Props = {
  route: ProductDetailsScreenRouteProp;
};
export const ProductDetails = ({route}: Props) => {
  const {productId} = route.params;
  const {formatterMoney} = formatter;

  const {
    productDetails,
    isRefetching,
    isError,
    isLoading: isLoadingProductDetails,
    refetch,
  } = useGetProductDetailsUseCase({id: productId ?? 0});

  const isLoading = isRefetching || isLoadingProductDetails;

  if (isLoading) return <LoadingView />;

  if (isError) return <RetryView actionButton={refetch} />;

  return (
    <View style={styles.container}>
      <Image source={{uri: productDetails?.thumbnail}} style={styles.image} />

      <Text style={styles.title} numberOfLines={2}>
        {productDetails?.title}
      </Text>

      <Text style={styles.value}>{productDetails?.description}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          {formatterMoney(productDetails?.price ?? 0)}
        </Text>

        <View style={styles.availability}>
          <Text style={styles.label}>Stock availability:</Text>
          <Text style={styles.value}>{productDetails?.stock}</Text>
        </View>
      </View>

      <View style={styles.tag}>
        <Text style={styles.value}>Brand: {productDetails?.brand}</Text>
      </View>

      <View style={styles.tag}>
        <Text style={styles.label}>Rating:</Text>
        <Text style={styles.value}>{productDetails?.rating} ⭐</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  availability: {
    backgroundColor: '#cae9ff',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    padding: 12,
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    gap: 12,
    padding: 24,
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  label: {
    fontSize: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
  },
  priceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tag: {
    backgroundColor: '#f7c59f',
    borderRadius: 8,
    padding: 12,
  },
  title: {
    fontSize: 24,
  },
  value: {
    fontSize: 18,
  },
});
