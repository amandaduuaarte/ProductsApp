import {useGetProductsByCategoryUseCase} from '@domain/useCases/useGetProductsByCategoryUseCase';
import {useGetProductsCategoriesUseCase} from '@domain/useCases/useGetProductsCategoriesUseCase';
import {CategoriesList} from '@presentation/shared/components/categoriesList';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('smartphones');
  const {categories} = useGetProductsCategoriesUseCase({});
  const {productsByCategory} = useGetProductsByCategoryUseCase({
    category: selectedCategory,
  });

  console.log(productsByCategory);
  return (
    <View style={styles.container}>
      <Text>Categories</Text>

      {productsByCategory ? (
        <View />
      ) : (
        <CategoriesList
          categories={categories}
          selectCategory={setSelectedCategory}
        />
      )}
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
