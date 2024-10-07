import { Button, TextInput, View } from 'react-native';

export default function ToDoForm({ styles }) {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a new task..." />
      <Button title="Add" />
    </View>
  );
}
