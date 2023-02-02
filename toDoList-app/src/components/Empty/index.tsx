import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import ClipBoard from '../../assets/Clipboard.png';

export function Empty() {
  return (
    <View style={styles.container}>
      <Image source={ClipBoard} />
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
