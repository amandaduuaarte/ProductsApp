import {TProduct} from '@data/schema/products.schema';
import {useGetProductsUseCase} from '@domain/useCases/useGetProductsUseCase';
import {useSearchProductsUseCase} from '@domain/useCases/useSearchProductsUseCase';
import {TStackRoutesProps} from '@presentation/routes/types';

import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';

type SearchNavigationProp = StackNavigationProp<TStackRoutesProps, 'Search'>;

type SearchScreenProps = {
  navigation: SearchNavigationProp;
};
export const Search = ({navigation}: SearchScreenProps) => {
  const [searchValue, setSearchValue] = useState('');
  const {searchProducts} = useSearchProductsUseCase({});
  const {products} = useGetProductsUseCase({});

  const {navigate} = navigation;

  const handleSearchProducts = useCallback(
    (value: string) => {
      setSearchValue(value);
      searchProducts({search: value});
    },
    [searchProducts],
  );

  const handleNavigationToDetailsScreen = useCallback(
    ({id}: {id: number}) => {
      navigate('ProductDetails', {productId: id});
    },
    [navigate],
  );

  const renderItem = ({item}: ListRenderItemInfo<TProduct>) => (
    <TouchableOpacity
      onPress={() => handleNavigationToDetailsScreen({id: item.id})}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={searchValue}
        onChangeText={handleSearchProducts}
        placeholder="Fragrances"
        keyboardType="default"
        style={styles.input}
      />

      {searchValue && (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          data={products?.products}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 24,
  },
  content: {
    marginVertical: 24,
    paddingBottom: 94,
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: 45,
    marginTop: 64,
  },
  text: {
    fontSize: 24,
    marginBottom: 12,
  },
});
