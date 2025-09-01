import {TProduct} from '@data/schema/products.schema';
import {PRODUCTS_QUERY_KEY} from '@data/services/getProductsService';
import {useGetProductsUseCase} from '@domain/useCases/useGetProductsUseCase';
import {useSearchProductsUseCase} from '@domain/useCases/useSearchProductsUseCase';
import {TStackRoutesProps} from '@presentation/routes/types';
import {RouteProp, useIsFocused} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';
import {useQueryClient} from '@tanstack/react-query';
import {useCallback, useEffect, useState} from 'react';
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
type SearchRouteProp = RouteProp<TStackRoutesProps, 'Search'>;

type SearchScreenProps = {
  navigation: SearchNavigationProp;
  route: SearchRouteProp;
};
export const Search = ({navigation, route}: SearchScreenProps) => {
  const [searchValue, setSearchValue] = useState('');
  const {searchProducts} = useSearchProductsUseCase({});
  const {products} = useGetProductsUseCase({});

  const {navigate} = navigation;
  const isFocused = useIsFocused();
  const queryClient = useQueryClient();
  const {isFocusOnInput = false} = route?.params || {};

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

  useEffect(() => {
    if (!isFocused) {
      setSearchValue('');
      queryClient.invalidateQueries({queryKey: [PRODUCTS_QUERY_KEY]});
    }
  }, [isFocused, queryClient]);

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus={isFocusOnInput}
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
