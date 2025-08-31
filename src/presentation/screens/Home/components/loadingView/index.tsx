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
          <SkeletonPlaceholder.Item width={120} height={24} borderRadius={4} />

          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginTop={16}
            justifyContent="space-between">
            <SkeletonPlaceholder.Item
              width="85%"
              height={40}
              borderRadius={8}
            />
            <SkeletonPlaceholder.Item width={32} height={32} borderRadius={6} />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="space-between"
            marginTop={24}>
            {[1, 2].map(index => (
              <SkeletonPlaceholder.Item key={index} width="48%">
                <SkeletonPlaceholder.Item height={140} borderRadius={8} />
                <SkeletonPlaceholder.Item
                  marginTop={12}
                  width="100%"
                  height={16}
                  borderRadius={4}
                />
                <SkeletonPlaceholder.Item
                  marginTop={6}
                  width="60%"
                  height={16}
                  borderRadius={4}
                />
                <SkeletonPlaceholder.Item
                  marginTop={6}
                  width="50%"
                  height={14}
                  borderRadius={4}
                />
              </SkeletonPlaceholder.Item>
            ))}
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

          <SkeletonPlaceholder.Item
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            marginTop={16}>
            {[1, 2, 3, 4].map(i => (
              <SkeletonPlaceholder.Item
                key={i}
                width="48%"
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
