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
            flexDirection="row"
            justifyContent="space-between"
            marginTop={24}>
            <SkeletonPlaceholder.Item width="100%" gap={24}>
              <SkeletonPlaceholder.Item
                height={200}
                borderRadius={8}
                width={200}
                alignSelf="center"
              />
              <SkeletonPlaceholder.Item
                marginTop={12}
                width="100%"
                height={32}
                borderRadius={4}
              />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width="60%"
                height={32}
                borderRadius={4}
              />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width="50%"
                height={32}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={32}>
            <SkeletonPlaceholder.Item
              width={100}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item width={60} height={16} borderRadius={4} />
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
