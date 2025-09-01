import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const CategoriesLoadingView = () => (
  <SkeletonPlaceholder
    backgroundColor="#2c2c2c"
    highlightColor="#edf2f4"
    speed={1200}>
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
  </SkeletonPlaceholder>
);
export const CarrouselLoadingView = () => (
  <SkeletonPlaceholder
    backgroundColor="#2c2c2c"
    highlightColor="#edf2f4"
    speed={1200}>
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
  </SkeletonPlaceholder>
);
