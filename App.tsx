import {Text, View, StyleSheet} from 'react-native';
import {ChasingTouchBubbles} from './src/animations/ChasingTouchBubbles';
import LampAnimation from './src/animations/LampAnimation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <ChasingTouchBubbles />
      <Text style={styles.text}>@CodeByAmil</Text> */}
      <LampAnimation/>
      </GestureHandlerRootView>
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
