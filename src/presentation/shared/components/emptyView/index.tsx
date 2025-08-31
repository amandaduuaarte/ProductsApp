import {StyleSheet, Text, View} from 'react-native';

export const EmptyView = () => {
  return (
    <View style={styles.container}>
      <Text>ohh we don&apos;t have nothing to show to you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#a9def9',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
