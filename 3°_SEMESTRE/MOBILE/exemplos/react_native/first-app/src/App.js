import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


import ViewExample04 from './basic_components/view_example04';


export default function App() {
  return (
    <View style={styles.container}>
      <ViewExample04/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0cd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
