import { StyleSheet } from 'react-native';
import { colors } from '../../configs/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 48,
    borderTopWidth: 1,
    borderColor: colors.gray400,
    width: '100%',
  },

  textBold: {
    fontWeight: 'bold',
    color: colors.gray300,
    fontSize: 14,
    marginTop: 16,
  },
  text: {
    color: colors.gray300,
    fontSize: 14,
  },
});
