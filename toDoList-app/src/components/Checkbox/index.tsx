import { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { IconDone } from '../../assets/icons/svg';
import { colors } from '../../configs/colors';
import { styles } from './style';

interface CheckboxProps {
  isChecked?: boolean;
  onValueChange?: (value: boolean) => void;
  value?: boolean;
}

export function Checkbox({ onValueChange, value = false }: CheckboxProps) {
  const handleChange = useCallback(() => {
    onValueChange && onValueChange(!value);
  }, [onValueChange, value]);
  return (
    <TouchableOpacity
      onPress={handleChange}
      style={[
        styles.container,
        !value && {
          borderColor: colors.blueDark,
          backgroundColor: 'transparent',
        },
      ]}
    >
      <View style={[styles.icon]}>{value && <IconDone />}</View>
    </TouchableOpacity>
  );
}
