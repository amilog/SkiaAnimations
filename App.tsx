import {Text, View, StyleSheet} from 'react-native';
import {ChasingTouchBubbles} from './src/animations/ChasingTouchBubbles';
import LampAnimation from './src/animations/LampAnimation';

const App = () => {
  return (
    <>
      {/* <ChasingTouchBubbles />
      <Text style={styles.text}>@CodeByAmil</Text> */}
      <LampAnimation/>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    color: 'white',
    fontSize: 20,
  },
});
