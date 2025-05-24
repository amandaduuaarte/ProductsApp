import {useCallback, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TProduct} from '@data/schema/products.schema';
import {useGetProductsUseCase} from '@domain/useCases/useGetProductsUseCase';
import {useGetProductsCategoriesUseCase} from '@domain/useCases/useGetProductsCategoriesUseCase';
import {TProductCategory} from '@data/schema/productsCategories.schema';
import {ProductCard} from './components/productCard';

export const Home = () => {
  const [searchValue, setSearchValue] = useState<string>();

  const {products} = useGetProductsUseCase();
  const {categories} = useGetProductsCategoriesUseCase({limit: 4});

  const renderProductCard = useCallback(
    ({item}: ListRenderItemInfo<TProduct>) => (
      <ProductCard
        name={item.title}
        category={item.category}
        price={item.price}
        thumbnail={item.thumbnail}
      />
    ),
    [],
  );

  const renderCategoryCard = useCallback(
    ({item}: ListRenderItemInfo<TProductCategory>) => (
      <TouchableOpacity style={styles.categoryContainer}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    ),
    [],
  );
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>Products App</Text>
        <TextInput
          style={styles.textField}
          onChangeText={setSearchValue}
          value={searchValue}
          placeholder="useless placeholder"
          keyboardType="default"
        />

        <FlatList
          horizontal
          data={products?.products}
          renderItem={renderProductCard}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<View />}
        />

        <Text>Some categories</Text>

        <FlatList
          numColumns={2}
          data={categories}
          renderItem={renderCategoryCard}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.categories}
          columnWrapperStyle={styles.categories}
          bounces={false}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    gap: 24,
    rowGap: 24,
  },
  categoryContainer: {
    alignItems: 'center',
    borderColor: 'blue',
    borderRadius: 12,
    borderWidth: 1,
    height: 164,
    justifyContent: 'center',
    padding: 12,
    width: '45%',
  },
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
