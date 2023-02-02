import { TouchableOpacity, View } from 'react-native';
import { IconDone } from '../../assets/icons/svg';
import { colors } from '../../configs/colors';
import { styles } from './style';

export function Checkbox({ isChecked = false }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        !isChecked && {
          borderColor: colors.blueDark,
          backgroundColor: 'transparent',
        },
      ]}
    >
      <View style={[styles.icon]}>{isChecked && <IconDone />}</View>
    </TouchableOpacity>
  );
}
