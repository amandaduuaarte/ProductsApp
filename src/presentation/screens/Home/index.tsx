import {
  Image,
  ImageBackground,
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

import {useCallback, useRef, useState} from 'react';

import {TStackRoutesProps} from '@presentation/routes/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {CategoriesList} from '@presentation/shared/components/categoriesList';
import {RetryView} from '@presentation/shared/components/retryView';

import {sortByFormatter} from '@domain/utils/getSortBy';
import {ProductsCarrousel} from './components/productsCarrousel';
import {
  CarrouselLoadingView,
  CategoriesLoadingView,
} from './components/loadingView';
import {Filters} from './components/filters';

type HomeNavigationProp = StackNavigationProp<TStackRoutesProps, 'Home'>;
type HomeRouteProp = RouteProp<TStackRoutesProps, 'Home'>;

type HomeScreenProps = {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
};

const filterIcon = require('@assets/icons/filter.png');
const banner = require('@assets/images/shopImage.jpg');

export const Home = ({route, navigation}: HomeScreenProps) => {
  const hasFilters = !!route.params?.sortBy && !!route.params?.orderBy;
  const searchInputRef = useRef<TextInput>(null);

  const [filtersApplied, setFiltersApplied] = useState<boolean | undefined>(
    hasFilters,
  );

  const sortBy = {
    sortBy: filtersApplied ? route.params?.sortBy : undefined,
    orderBy: filtersApplied ? route.params?.orderBy : undefined,
  };
  const {categories, isLoading: isCategoriesLoading} =
    useGetProductsCategoriesUseCase(4);
  const {
    products,
    refetch,
    isError: isProductsError,
    isLoading: isProductsLoading,
  } = useGetProductsUseCase(sortBy);

  const {navigate} = navigation;

  const isError = isProductsError;
  const {getSortBy} = sortByFormatter;

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

  const navigateToSearchScreen = () => {
    navigate('Search', {isFocusOnInput: true});
    searchInputRef.current?.blur();
  };

  const filterLabel = getSortBy({
    sortBy: route.params?.sortBy,
    orderBy: route.params?.orderBy,
  });

  if (isError) return <RetryView actionButton={refetch} />;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.content}>
          <Text style={styles.title}>Products App</Text>
          <View style={styles.searchContainer}>
            <TextInput
              ref={searchInputRef}
              style={styles.textField}
              placeholder="Type here to search"
              onFocus={navigateToSearchScreen}
            />

            <TouchableOpacity onPress={handleFiltersBottomSheet}>
              <Image source={filterIcon} style={styles.filterIcon} />
            </TouchableOpacity>
          </View>

          <ImageBackground source={banner} style={styles.banner}>
            <View style={styles.bannerTitleContainer}>
              <Text style={styles.bannerTitle}>This season’s latest</Text>
            </View>
          </ImageBackground>

          {filtersApplied && (
            <Filters label={filterLabel} action={setFiltersApplied} />
          )}

          {isProductsLoading ? (
            <CarrouselLoadingView />
          ) : (
            <ProductsCarrousel products={products} />
          )}

          <View style={styles.categories}>
            <Text style={styles.categoriesText}>Shop by categories</Text>
          </View>

          {isCategoriesLoading ? (
            <CategoriesLoadingView />
          ) : (
            <CategoriesList
              scrollEnabled={false}
              categories={categories?.slice(0, 4)}
              selectCategory={handleSelectedCategory}
            />
          )}

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
  banner: {
    alignSelf: 'center',
    height: 205,
    justifyContent: 'flex-end',
    width: '100%',
  },
  bannerTitle: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '700',
  },
  bannerTitleContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#000',
    padding: 12,
    width: '45%',
  },
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
    marginBottom: 82,
    width: '80%',
  },
  seeMoreText: {
    alignSelf: 'center',
    color: '#415a77',
  },
  textField: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: 45,
    padding: 24,
    width: '85%',
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
});
