import {useGetProductsCategoriesUseCase} from '@domain/useCases/useGetProductsCategoriesUseCase';
import {TStackRoutesProps} from '@presentation/routes/types';
import {CategoriesList} from '@presentation/shared/components/categoriesList';
import {RetryView} from '@presentation/shared/components/retryView';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback} from 'react';

import {StyleSheet, View} from 'react-native';

type TCategoriesNavigationProp = StackNavigationProp<
  TStackRoutesProps,
  'Categories'
>;
export const Categories = () => {
  const {categories, isError, refetch} = useGetProductsCategoriesUseCase({});

  const {navigate} = useNavigation<TCategoriesNavigationProp>();

  const handleSelectedCategory = useCallback((category: string) => {
    navigate('ProductsList', {category});
  }, []);

  if (isError) return <RetryView actionButton={refetch} />;

  return (
    <View style={styles.container}>
      <CategoriesList
        categories={categories}
        selectCategory={handleSelectedCategory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    gap: 12,
    padding: 24,
  },
});
