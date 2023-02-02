import { Text, View } from 'react-native';
import { styles } from './styles';

interface LabelProps {
  color: string;
  children: string;
  total: number;
}

export function Label({ color, children, total }: LabelProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: color }]}>{children}</Text>
      <View style={styles.containerTotal}>
        <Text style={styles.textTotal}>{total}</Text>
      </View>
    </View>
  );
}
