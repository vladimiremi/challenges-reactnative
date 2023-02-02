import { StyleSheet } from 'react-native';
import { colors } from '../../configs/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
  },
  containerTotal: {
    backgroundColor: colors.gray400,
    borderRadius: 999,
    width: 25,
    height: 19,
    alignItems: 'center',
    marginLeft: 5,
    justifyContent: 'center',
  },
  textTotal: {
    color: colors.gray200,
    fontWeight: '700',
    fontSize: 12,
  },
});
