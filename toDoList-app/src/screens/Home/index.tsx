import { Image, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import Logo from '../../assets/Logo.png';
import { colors } from '../../configs/colors';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
        />
      </View>
    </View>
  );
}
