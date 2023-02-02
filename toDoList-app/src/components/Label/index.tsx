import { Text } from 'react-native';
import { styles } from './styles';

interface LabelProps {
  color: string;
  children: string;
}

export function Label({ color, children }: LabelProps) {
  return <Text style={[styles.label, { color: color }]}>{children}</Text>;
}
