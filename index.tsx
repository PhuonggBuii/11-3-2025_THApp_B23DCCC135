import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Task = { id: string; text: string };

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim() === '') return;
    const newTask: Task = { id: Date.now().toString(), text: task };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const deleteTask = (id: string) => {
    Alert.alert('Xóa công việc', 'Bạn có chắc muốn xóa?', [
      { text: 'Hủy', style: 'cancel' },
      { text: 'Xóa', onPress: () => setTasks(tasks.filter(t => t.id !== id)) },
    ]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nhập công việc"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Button title="Thêm" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onLongPress={() => deleteTask(item.id)}>
            <Text style={styles.item}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  input: { borderWidth:1, borderColor:'#ccc', borderRadius:5, padding:10, marginBottom:10 },
  item: { padding:10, borderBottomWidth:1, borderColor:'#eee' },
});