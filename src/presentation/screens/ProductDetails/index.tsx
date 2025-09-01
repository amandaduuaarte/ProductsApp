import {useGetProductDetailsUseCase} from '@domain/useCases/useGetProductDetailsUseCase';
import {formatter} from '@domain/utils/formatterMoney';
import {TStackRoutesProps} from '@presentation/routes/types';
import {RetryView} from '@presentation/shared/components/retryView';
import {RouteProp} from '@react-navigation/native';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FavoriteTag} from '@presentation/shared/components/favoriteTag';
import {useState} from 'react';
import {LoadingView} from './components/loadingView';

type ProductDetailsScreenRouteProp = RouteProp<
  TStackRoutesProps,
  'ProductDetails'
>;

type Props = {
  route: ProductDetailsScreenRouteProp;
};

enum ESelectOption {
  DESCRIPTION = 'description',
  STOCK = 'stock',
  RATING = 'rating',
}

export const ProductDetails = ({route}: Props) => {
  const [optionSelected, setOptionSelected] = useState<ESelectOption>(
    ESelectOption.DESCRIPTION,
  );
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

  const isDescription = optionSelected === ESelectOption.DESCRIPTION;
  const isStock = optionSelected === ESelectOption.STOCK;
  const isRating = optionSelected === ESelectOption.RATING;

  if (isLoading) return <LoadingView />;

  if (isError) return <RetryView actionButton={refetch} />;

  return (
    <View style={styles.container}>
      <FavoriteTag productId={productDetails?.discountPercentage ?? 0} />

      <View style={styles.header}>
        <Image source={{uri: productDetails?.thumbnail}} style={styles.image} />

        <View style={styles.headerTexts}>
          <Text style={styles.title} numberOfLines={1}>
            {productDetails?.brand}
          </Text>

          <Text style={styles.title} numberOfLines={1}>
            {productDetails?.title}
          </Text>

          <Text style={styles.price} numberOfLines={1}>
            {formatterMoney(productDetails?.price ?? 0)}
          </Text>

          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}> Buy now </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => setOptionSelected(ESelectOption.DESCRIPTION)}>
          <Text style={styles.label}>Description</Text>
          {isDescription && <View style={styles.divider} />}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setOptionSelected(ESelectOption.STOCK)}>
          <Text style={styles.label}>Stock</Text>
          {isStock && <View style={styles.divider} />}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setOptionSelected(ESelectOption.RATING)}>
          <Text style={styles.label}>Rating</Text>
          {isRating && <View style={styles.divider} />}
        </TouchableOpacity>
      </View>

      {isDescription && (
        <Text style={styles.value}>{productDetails?.description}</Text>
      )}

      {isStock && <Text style={styles.value}>{productDetails?.stock}</Text>}

      {isRating && (
        <Text style={styles.value}>{productDetails?.rating} ⭐</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#000',
    height: 31,
    justifyContent: 'center',
    width: 97,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  divider: {
    backgroundColor: '#000',
    height: 2,
    marginTop: 5,
    width: 85,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTexts: {
    alignContent: 'center',
    gap: 14,
    width: '50%',
  },
  image: {
    alignSelf: 'flex-start',
    height: 155,
    width: 170,
  },
  label: {
    fontSize: 16,
    justifyContent: 'center',
    width: 85,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
  },
  value: {
    fontSize: 18,
    marginTop: 24,
    textAlign: 'justify',
  },
});
