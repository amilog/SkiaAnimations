import {Text, View, StyleSheet} from 'react-native';
import {ChasingTouchBubbles} from './src/Animations/ChasingTouchBubbles';

const App = () => {
  return (
    <View style={styles.container}>
      <ChasingTouchBubbles />
      <Text style={styles.text}>@CodeByAmil</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    color: 'white',
    fontSize: 20,
  },
});
