import { Pressable, ScrollView, Text, View } from 'react-native';
import styles from './ui/styles';

export default function ToDoList({ tasks }) {
  const renderTask = (task, index) => (
    <Pressable key={`${index}`}>
      <View style={styles.task}>
        <Text style={styles.taskText}>{task}</Text>
      </View>
    </Pressable>
  );

  return (
    <ScrollView contentContainerStyle={styles.taskListContainer}>
      <View style={styles.taskListHeader}>
        <Text style={styles.taskListHeaderText}>To-Do List</Text>
      </View>
      {tasks.map(renderTask)}
    </ScrollView>
  );
}
