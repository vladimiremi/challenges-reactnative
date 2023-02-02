import { StyleSheet } from 'react-native';
import { colors } from '../../configs/colors';

export const styles = StyleSheet.create({
  container: {
    width: 21,
    height: 21,
    opacity: 0.9,
    backgroundColor: colors.purple,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 13,
    borderWidth: 2,
    borderColor: colors.purple,
  },
  icon: {
    width: 13,
  },
});
