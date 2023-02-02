import { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { IconPlus } from '../../assets/icons/svg';
import { Empty } from '../../components/Empty';
import { TaskProps, ToDo } from '../../components/ToDo';
import { Label } from '../../components/Label';

import { colors } from '../../configs/colors';
import Logo from '../../assets/Logo.png';
import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [content, setContent] = useState('');

  function handleAddTask() {
    const newTask = {
      id: new Date().getTime().toString(),
      content: content,
      status: false,
    };
    setTasks(prevState => [...prevState, newTask]);

    setContent('');

    return;
  }

  function handleRemoveTask(id: string) {
    const withTaskRemoved = tasks.filter(task => task.id !== id);
    setTasks(withTaskRemoved);
  }

  function handleToggleTaskStatus(id: string) {
    const withTaskUpdated = tasks.map(task =>
      task.id === id ? { ...task, status: !task.status } : task,
    );
    setTasks(withTaskUpdated);
  }

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
          onChangeText={setContent}
          value={content}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <IconPlus />
        </TouchableOpacity>
      </View>
      <View style={styles.containerLabels}>
        <Label color={colors.blueDark} total={tasks.length}>
          Criadas
        </Label>
        <Label
          color={colors.purple}
          total={tasks.filter(task => task.status === true).length}
        >
          Concluídas
        </Label>
      </View>
      {true ? (
        tasks.map(task => (
          <ToDo
            key={task.id}
            task={task}
            onRemoveTask={handleRemoveTask}
            onToggleTaskStatus={handleToggleTaskStatus}
          />
        ))
      ) : (
        <Empty />
      )}
    </View>
  );
}
