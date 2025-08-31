import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type TProductCard = {
  id: number;
  name: string;
  thumbnail: string;
  onPress: () => void;
};

export const ProductCard = (product: TProductCard) => {
  const {name, thumbnail, onPress, id} = product;

  return (
    <View key={id}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={{uri: thumbnail}} style={styles.thumbnail} />
        <Text style={styles.title} numberOfLines={1}>
          {name}
        </Text>

        {/* <FavoriteTag productId={id} /> */}
        <Text style={styles.text}>Shop now</Text>
        <View style={styles.textDecoration} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    height: 210,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
    width: 170,
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
  },
  textDecoration: {
    alignSelf: 'center',
    backgroundColor: '#219ebc',
    height: 2,
    width: '80%',
  },
  thumbnail: {
    alignSelf: 'center',
    height: 111,
    width: 111,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
});
