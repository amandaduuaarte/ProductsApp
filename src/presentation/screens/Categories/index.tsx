import {useGetProductsCategoriesUseCase} from '@domain/useCases/useGetProductsCategoriesUseCase';
import {TStackRoutesProps} from '@presentation/routes/types';
import {CategoriesList} from '@presentation/shared/components/categoriesList';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback} from 'react';

import {StyleSheet, Text, View} from 'react-native';

type TCategoriesNavigationProp = StackNavigationProp<
  TStackRoutesProps,
  'Categories'
>;
export const Categories = () => {
  const {categories} = useGetProductsCategoriesUseCase({});

  const {navigate} = useNavigation<TCategoriesNavigationProp>();

  const handleSelectedCategory = useCallback((category: string) => {
    navigate('ProductsList', {category});
  }, []);

  return (
    <View style={styles.container}>
      <Text>Categories</Text>

      <CategoriesList
        categories={categories}
        selectCategory={handleSelectedCategory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 24,
  },
});
