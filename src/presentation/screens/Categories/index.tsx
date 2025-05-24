import {useGetProductsCategoriesUseCase} from '@domain/useCases/useGetProductsCategoriesUseCase';
import {CategoriesList} from '@presentation/shared/components/categoriesList';
import {StyleSheet, Text, View} from 'react-native';

export const Categories = () => {
  const {categories} = useGetProductsCategoriesUseCase({});

  return (
    <View style={styles.container}>
      <Text>Categories</Text>

      <CategoriesList categories={categories} />
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
