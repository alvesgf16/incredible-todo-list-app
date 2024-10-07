import { Pressable, ScrollView, Text, View } from 'react-native';

export default function ToDoList({ styles }) {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Walk dog</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}
