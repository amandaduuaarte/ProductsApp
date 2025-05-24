import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {useGetProductsUseCase} from '@domain/useCases/useGetProductsUseCase';
import {useGetProductsCategoriesUseCase} from '@domain/useCases/useGetProductsCategoriesUseCase';

import {useSearchProductsUseCase} from '@domain/useCases/useSearchProductsUseCase';
import {useCallback} from 'react';

import {ProductsCarrousel} from './components/productsCarrousel';
import {Categories} from './components/categories';

const filterIcon = require('@assets/icons/filter.png');

export const Home = () => {
  const {searchProducts} = useSearchProductsUseCase();
  const {categories} = useGetProductsCategoriesUseCase({limit: 4});
  const {products} = useGetProductsUseCase();

  const handleSearchProducts = useCallback((value: string) => {
    searchProducts({search: value});
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>Products App</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textField}
            onChangeText={handleSearchProducts}
            placeholder="Fragrances"
            keyboardType="decimal-pad"
          />
          <TouchableOpacity>
            <Image source={filterIcon} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>

        <ProductsCarrousel products={products} />
        <Text>Some categories</Text>
        <Categories categories={categories} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  content: {
    gap: 24,
  },
  filterIcon: {
    height: 32,
    tintColor: 'blue',
    width: 32,
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textField: {
    borderColor: 'blue',
    borderRadius: 12,
    borderWidth: 1,
    padding: 24,
    width: '85%',
  },
  title: {
    color: 'blue',
    fontSize: 18,
  },
});
