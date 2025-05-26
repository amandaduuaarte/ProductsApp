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
import {RouteProp} from '@react-navigation/native';

import {CategoriesList} from '@presentation/shared/components/categoriesList';
import {RetryView} from '@presentation/shared/components/retryView';

import {ProductsCarrousel} from './components/productsCarrousel';
import {LoadingView} from './components/loadingView';

type HomeNavigationProp = StackNavigationProp<TStackRoutesProps, 'Home'>;
type HomeRouteProp = RouteProp<TStackRoutesProps, 'Home'>;

type HomeScreenProps = {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
};

const filterIcon = require('@assets/icons/filter.png');

export const Home = ({route, navigation}: HomeScreenProps) => {
  const {searchProducts, isError: isSearchProductsError} =
    useSearchProductsUseCase();
  const {categories} = useGetProductsCategoriesUseCase({limit: 4});
  const {
    products,
    refetch,
    isError: isProductsError,
    isLoading: isProductsLoading,
  } = useGetProductsUseCase({
    sortBy: route.params?.sortBy,
    orderBy: route.params?.orderBy,
  });

  const {navigate} = navigation;

  const isError = isSearchProductsError || isProductsError;

  const handleSearchProducts = useCallback((value: string) => {
    searchProducts({search: value});
  }, []);

  const navigateToCategoriesScreen = useCallback(() => {
    navigate('Categories');
  }, []);

  const handleSelectedCategory = useCallback((category: string) => {
    navigate('ProductsList', {category});
  }, []);

  const handleFiltersBottomSheet = () => {
    setTimeout(() => {
      navigate('BottomSheet');
    }, 200);
  };

  if (isProductsLoading) return <LoadingView />;

  if (isError) return <RetryView actionButton={refetch} />;

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
            <TouchableOpacity onPress={handleFiltersBottomSheet}>
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
