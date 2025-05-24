import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

type TProductCard = {
  name: string;
  price: number;
  category: string;
  thumbnail: string;
  onPress: () => void;
};
export const ProductCard = (product: TProductCard) => {
  const {name, price, category, thumbnail, onPress} = product;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{category}</Text>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  thumbnail: {
    height: 45,
    width: 45,
  },
});
