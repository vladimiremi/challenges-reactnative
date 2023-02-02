import { StyleSheet } from 'react-native';
import { colors } from '../../configs/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    // padding: 12,
    alignItems: 'center',
    backgroundColor: colors.gray400,
    borderRadius: 8,
    justifyContent: 'space-between',
    height: 64,
    marginBottom: 8,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: colors.gray100,
  },
  textChecked: { textDecorationLine: 'line-through', color: colors.gray300 },
  checkbox: {
    margin: 4,
    borderRadius: 100,
    fontSize: 16,
  },
  iconTrash: {
    width: 17,
    margin: 10,
  },
});
