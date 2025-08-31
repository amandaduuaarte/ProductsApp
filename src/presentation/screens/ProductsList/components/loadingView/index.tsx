import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const LoadingView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SkeletonPlaceholder
        backgroundColor="#2c2c2c"
        highlightColor="#edf2f4"
        speed={1200}>
        <SkeletonPlaceholder.Item paddingHorizontal={16} paddingTop={16}>
          <SkeletonPlaceholder.Item
            flexDirection="column"
            flexWrap="wrap"
            justifyContent="space-between"
            marginTop={16}>
            {[1, 2, 3, 4, 5].map(i => (
              <SkeletonPlaceholder.Item
                key={i}
                width="100%"
                height={100}
                borderRadius={12}
                marginBottom={16}
              />
            ))}
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
