import {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

import {useGetProductsUseCase} from '@domain/useCases/useGetProductsUseCase';
import {useGetProductsCategoriesUseCase} from '@domain/useCases/useGetProductsCategoriesUseCase';

import {Categories} from './components/categories';
import {ProductsCarrousel} from './components/productsCarrousel';

export const Home = () => {
  const [searchValue, setSearchValue] = useState<string>();

  const {products} = useGetProductsUseCase();
  const {categories} = useGetProductsCategoriesUseCase({limit: 4});

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>Products App</Text>
        <TextInput
          style={styles.textField}
          onChangeText={setSearchValue}
          value={searchValue}
          placeholder="Fragrances"
          keyboardType="default"
        />

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
  textField: {
    borderColor: 'blue',
    borderRadius: 12,
    borderWidth: 1,
    padding: 24,
  },
  title: {
    color: 'blue',
    fontSize: 18,
  },
});
