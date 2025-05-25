import {useGetProductDetailsUseCase} from '@domain/useCases/useGetProductDetailsUseCase';
import {TStackRoutesProps} from '@presentation/routes/types';
import {RouteProp} from '@react-navigation/native';

import {Image, StyleSheet, Text, View} from 'react-native';

type ProductDetailsScreenRouteProp = RouteProp<
  TStackRoutesProps,
  'ProductDetails'
>;

type Props = {
  route: ProductDetailsScreenRouteProp;
};
export const ProductDetails = ({route}: Props) => {
  const {productId} = route.params;

  const {productDetails, isRefetching, isError, isLoading} =
    useGetProductDetailsUseCase({id: productId ?? 0});

  return (
    <View>
      <Text>Details</Text>

      <Image source={{uri: productDetails?.thumbnail}} style={styles.image} />

      <Text>Name:</Text>
      <Text>{productDetails?.title}</Text>

      <Text>Description:</Text>
      <Text>{productDetails?.description}</Text>

      <Text>Price:</Text>
      <Text>{productDetails?.price}</Text>

      <Text>Brad:</Text>
      <Text>{productDetails?.brand}</Text>

      <Text>Stock availability:</Text>
      <Text>{productDetails?.stock}</Text>

      <Text>Rating:</Text>
      <Text>{productDetails?.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
  },
});
