import {formatter} from '@domain/utils/formatterMoney';
import {FavoriteTag} from '@presentation/shared/components/favoriteTag';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type TProductCard = {
  id: number;
  price: number;
  title: string;
  thumbnail: string;
  quantity: number;
  onPress({id}: {id: number}): void;
};
export const ProductCard = ({
  id,
  price,
  title,
  thumbnail,
  quantity,
  onPress,
}: TProductCard) => {
  const {formatterMoney} = formatter;

  return (
    <TouchableOpacity onPress={() => onPress({id})} style={styles.container}>
      <View style={styles.content}>
        <Image source={{uri: thumbnail}} style={styles.thumbnail} />

        <View style={{width: '55%'}}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>

          <Text style={styles.price}>{formatterMoney(price)}</Text>

          <Text numberOfLines={2} style={styles.stock} ellipsizeMode="tail">
            In storage: {quantity}
          </Text>
        </View>
      </View>

      <FavoriteTag productId={id} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#F4F8FB',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 12,
  },
  content: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  price: {
    color: '#001d3d',
    fontSize: 16,
    fontWeight: 700,
    marginVertical: 8,
  },
  stock: {
    alignSelf: 'flex-end',
    marginTop: 12,
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
