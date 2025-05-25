import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

type TRetryView = {
  actionButton: () => void;
};
export const RetryView = ({actionButton}: TRetryView) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>Something wrong...</Text>
        <Button onPress={actionButton} title="Try again" />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    fontSize: 24,
  },
});
