import {
  Image,
  SafeAreaView,
  ScrollView,
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

import {TStackRoutesProps} from '@presentation/routes/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {CategoriesList} from '@presentation/shared/components/categoriesList';
import {ProductsCarrousel} from './components/productsCarrousel';

type THomeNavigationProp = StackNavigationProp<TStackRoutesProps, 'Home'>;

const filterIcon = require('@assets/icons/filter.png');

export const Home = () => {
  const {searchProducts} = useSearchProductsUseCase();
  const {categories} = useGetProductsCategoriesUseCase({limit: 4});
  const {products} = useGetProductsUseCase();

  const {navigate} = useNavigation<THomeNavigationProp>();

  const handleSearchProducts = useCallback((value: string) => {
    searchProducts({search: value});
  }, []);

  const navigateToCategoriesScreen = useCallback(() => {
    navigate('Categories');
  }, []);

  const handleSelectedCategory = useCallback((category: string) => {
    navigate('ProductsList', {category});
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

          <View style={styles.categories}>
            <Text style={styles.categoriesText}>Categories</Text>
            <TouchableOpacity onPress={navigateToCategoriesScreen}>
              <Text style={styles.seeMoreButton}>See More</Text>
            </TouchableOpacity>
          </View>

          <CategoriesList
            scrollEnabled={false}
            categories={categories}
            selectCategory={handleSelectedCategory}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriesText: {
    color: '#219ebc',
    fontSize: 18,
    fontWeight: 700,
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  content: {
    gap: 24,
    margin: 24,
    paddingBottom: 24,
  },
  filterIcon: {
    height: 32,
    tintColor: '#023047',
    width: 32,
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeMoreButton: {
    color: '#415a77',
  },
  textField: {
    borderColor: '#219ebc',
    borderRadius: 12,
    borderWidth: 2,
    padding: 24,
    width: '85%',
  },
  title: {
    color: '#219ebc',
    fontSize: 18,
    fontWeight: '700',
  },
});
