import {StyleSheet, Text, View} from 'react-native';

export const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello World</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 24,
  },
  text: {
    color: 'blue',
  },
});
