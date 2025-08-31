import {View, StyleSheet, TextInput} from 'react-native';

export const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type here to search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 24,
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: 45,
  },
});
