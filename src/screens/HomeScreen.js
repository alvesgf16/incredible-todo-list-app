import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';
import styles from '../components/ui/styles';

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const addTask = (task) => {
    if (tasks.includes(task)) {
      setIsDuplicate(true);
    } else {
      setTasks([...tasks, task]);
      setIsDuplicate(false);
    }
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} isDuplicate={isDuplicate} />
      </SafeAreaView>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
        style={styles.button}
      />
    </MainLayout>
  );
}

export default HomeScreen;
