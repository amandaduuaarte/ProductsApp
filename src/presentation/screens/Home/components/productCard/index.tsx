import {Image, StyleSheet, Text, View} from 'react-native';

type TProductCard = {
  name: string;
  price: number;
  category: string;
  thumbnail: string;
};
export const ProductCard = (product: TProductCard) => {
  const {name, price, category, thumbnail} = product;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{category}</Text>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  thumbnail: {
    height: 45,
    width: 45,
  },
});
