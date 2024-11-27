import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './ui/styles';

export default function ToDoForm({ addTask, isDuplicate }) {
  const [taskText, setTaskText] = useState('');

  const handleChange = (text) => {
    setTaskText(text);
  };

  const handlePress = () => {
    if (taskText !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a new task..."
          onChangeText={handleChange}
          value={taskText}
          style={styles.input}
        />
        <Text
          style={{ ...styles.error, display: isDuplicate ? 'flex' : 'none' }}
        >
          Task already exists!
        </Text>
      </View>
      <Button style={styles.button} title="Add" onPress={handlePress} />
    </View>
  );
}
