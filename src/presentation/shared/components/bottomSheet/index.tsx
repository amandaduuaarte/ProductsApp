import {TStackRoutesProps} from '@presentation/routes/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, StyleSheet, Pressable} from 'react-native';

type TBottomSheetNavigationProp = StackNavigationProp<
  TStackRoutesProps,
  'BottomSheet'
>;

export const BottomSheet = () => {
  const {goBack} = useNavigation<TBottomSheetNavigationProp>();

  return (
    <Pressable style={styles.bottomSheet} onPressOut={goBack}>
      <View style={styles.sheet}>
        <Text style={styles.title}>Filter by</Text>

        <Text style={styles.label}>Price</Text>

        <View style={styles.row}>
          <View style={styles.optionContainer}>
            <Text style={styles.value}>Big price</Text>
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.value}>Less price</Text>
          </View>
        </View>

        <Text style={styles.label}>Rating</Text>

        <View style={styles.row}>
          <View style={styles.optionContainer}>
            <Text style={styles.value}>Bests ratting</Text>
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.value}>Bad ratting</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 12,
  },
  optionContainer: {
    alignItems: 'center',
    backgroundColor: '#fcf6bd',
    borderRadius: 24,
    marginHorizontal: 12,
    padding: 24,
    width: '40%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: 400,
  },
});
