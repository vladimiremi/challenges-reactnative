import { Text, TouchableOpacity, View } from 'react-native';
import { IconTrash } from '../../assets/icons/svg';
import { Checkbox } from '../Checkbox';
import { styles } from './styles';

export interface TaskProps {
  id: string;
  content: string;
  status: boolean;
}

interface ToDoProps {
  task: TaskProps;
  onRemoveTask: (id: string) => void;
  onToggleTaskStatus: (id: string) => void;
}

export function ToDo({ task, onRemoveTask, onToggleTaskStatus }: ToDoProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        value={task.status}
        onValueChange={() => onToggleTaskStatus(task.id)}
      />
      <Text style={[styles.text, task.status && styles.textChecked]}>
        {task.content}
      </Text>
      <TouchableOpacity
        style={styles.iconTrash}
        onPress={() => onRemoveTask(task.id)}
      >
        <IconTrash />
      </TouchableOpacity>
    </View>
  );
}
