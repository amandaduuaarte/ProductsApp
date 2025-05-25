import {formatter} from '@domain/utils/formatterMoney';
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
  const {formatterMoney} = formatter;

  const priceFormatted = formatterMoney(price);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <Text style={styles.title}>{name}</Text>

      <Text style={styles.text}>Price: {priceFormatted}</Text>
      <Text style={styles.text}>Category: {category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#415a77',
    borderRadius: 8,
    borderWidth: 2,
    height: 300,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
    width: 200,
  },
  text: {
    textTransform: 'capitalize',
  },
  thumbnail: {
    height: 130,
    width: 130,
  },
  title: {
    fontSize: 18,
  },
});
