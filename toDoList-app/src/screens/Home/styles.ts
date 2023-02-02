import { StyleSheet } from 'react-native';
import { colors } from '../../configs/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray700,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24,
  },

  header: {
    marginTop: 56,
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 32,
  },

  //<form>
  input: {
    flex: 1,
    height: 54,
    backgroundColor: colors.gray500,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.gray700,
    borderStyle: 'solid',
    borderRadius: 6,
    color: colors.gray100,
  },

  button: {
    padding: 18,
    backgroundColor: colors.blueDark,
    width: 52,
    height: 52,
    borderRadius: 6,
    marginLeft: 8,
  },
  //</form>

  containerLabels: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
});
