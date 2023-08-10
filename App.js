import { StyleSheet, Text, View } from 'react-native';
import Search from './src/screens/Search';
import TestApp from './src/Test/TextApp';

export default function App() {
  return (
    <View style={styles.container}>
     <Search/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
