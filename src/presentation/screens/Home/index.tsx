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
import {useCallback, useState} from 'react';

import {TStackRoutesProps} from '@presentation/routes/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {CategoriesList} from '@presentation/shared/components/categoriesList';
import {RetryView} from '@presentation/shared/components/retryView';

import {sortByFormatter} from '@domain/utils/getSortBy';
import {ProductsCarrousel} from './components/productsCarrousel';
import {LoadingView} from './components/loadingView';
import {Filters} from './components/filters';

type HomeNavigationProp = StackNavigationProp<TStackRoutesProps, 'Home'>;
type HomeRouteProp = RouteProp<TStackRoutesProps, 'Home'>;

type HomeScreenProps = {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
};

const filterIcon = require('@assets/icons/filter.png');

export const Home = ({route, navigation}: HomeScreenProps) => {
  const hasFilters = !!route.params?.sortBy && !!route.params?.orderBy;

  const [filtersApplied, setFiltersApplied] = useState<boolean | undefined>(
    hasFilters,
  );

  const sortBy = {
    sortBy: filtersApplied ? route.params?.sortBy : undefined,
    orderBy: filtersApplied ? route.params?.orderBy : undefined,
  };
  const {categories} = useGetProductsCategoriesUseCase(4);
  const {
    products,
    refetch,
    isError: isProductsError,
    isLoading: isProductsLoading,
  } = useGetProductsUseCase(sortBy);

  const {searchProducts} = useSearchProductsUseCase(sortBy);

  const {navigate} = navigation;

  const isError = isProductsError;
  const {getSortBy} = sortByFormatter;

  const handleSearchProducts = useCallback(
    (value: string) => {
      searchProducts({search: value});
    },
    [searchProducts],
  );

  const navigateToCategoriesScreen = useCallback(() => {
    navigate('Categories');
  }, [navigate]);

  const handleSelectedCategory = useCallback(
    (category: string) => {
      navigate('ProductsList', {category});
    },
    [navigate],
  );

  const handleFiltersBottomSheet = () => {
    setTimeout(() => {
      navigate('BottomSheet');
    }, 200);
  };

  const filterLabel = getSortBy({
    sortBy: route.params?.sortBy,
    orderBy: route.params?.orderBy,
  });

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

          {filtersApplied && (
            <Filters label={filterLabel} action={setFiltersApplied} />
          )}

          <ProductsCarrousel products={products} />

          <View style={styles.categories}>
            <Text style={styles.categoriesText}>Shop by categories</Text>
          </View>

          <CategoriesList
            scrollEnabled={false}
            categories={categories}
            selectCategory={handleSelectedCategory}
          />

          <TouchableOpacity
            onPress={navigateToCategoriesScreen}
            style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>Browse all categories</Text>
          </TouchableOpacity>
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
    alignSelf: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    height: 35,
    justifyContent: 'center',
    width: '80%',
  },
  seeMoreText: {
    alignSelf: 'center',
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
