import React, {useState} from 'react';
import {Animated, Pressable, StyleSheet, View} from 'react-native';
import Metrics from '../constants/metrics';
import LinearGradient from 'react-native-linear-gradient';

function LampAnimation() {
  const [lampOn, setLampOn] = useState(false);
  const [lampColor] = useState(new Animated.Value(0));

  const handlePress = () => {
    console.log('Pressed');
    setLampOn(!lampOn);

    Animated.timing(lampColor, {
      toValue: lampOn ? 0 : 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  const interpolatedColor = lampColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#A2A2A2', 'rgba(255,255,0,1)'],
  });

  return (
    <View style={styles.view}>
      <View style={styles.whiteContainer} />
      <View style={styles.lampRectangular} />
      <Animated.View
        style={[styles.lamp, {backgroundColor: interpolatedColor}]}
      />
      <View style={styles.leftContainer} />
      <Animated.View
        style={[
          styles.light,
          {
            opacity: lampColor,
            transform: [
              {
                translateY: Animated.multiply(
                  lampColor.interpolate({
                    inputRange: [0, 1],
                    outputRange: [Metrics.rem * 580, 0],
                  }),
                  -1,
                ),
              },
            ],
          },
        ]}>
        <LinearGradient
          colors={['rgba(255,255,0,0.5)', 'rgba(255,255,0,0)']}
          style={styles.gradient}
        />
      </Animated.View>
      <View style={styles.rightContainer} />
      <View style={styles.trapezoid} />
      <View style={styles.lampRope} />
      <Pressable style={styles.switch} onPress={handlePress} />
    </View>
  );
}

export default LampAnimation;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  lampRectangular: {
    width: Metrics.rem * 15,
    height: Metrics.rem * 200,
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 2,
  },
  trapezoid: {
    position: 'absolute',
    top: Metrics.rem * 200,
    width: Metrics.rem * 250,
    borderBottomWidth: Metrics.rem * 150,
    borderBottomColor: 'black',
    borderLeftWidth: Metrics.rem * 60,
    borderLeftColor: 'transparent',
    borderRightWidth: Metrics.rem * 60,
    borderRightColor: 'transparent',
    zIndex: 2,
  },
  lamp: {
    width: Metrics.rem * 100,
    height: Metrics.rem * 100,
    borderRadius: Metrics.rem * 50,
    position: 'absolute',
    top: Metrics.rem * 290,
  },
  light: {
    position: 'absolute',
    top: Metrics.rem * 350,
    width: Metrics.WIDTH,
    height: Metrics.rem * 580,
  },
  rightContainer: {
    width: Metrics.rem * 500,
    height: Metrics.rem * 300,
    position: 'absolute',
    top: Metrics.rem * 200,
    right: Metrics.rem * -206,
    backgroundColor: 'white',
    zIndex: 1,
    transform: [{skewY: '70deg'}],
  },
  leftContainer: {
    width: Metrics.rem * 500,
    height: Metrics.rem * 300,
    position: 'absolute',
    top: Metrics.rem * 200,
    left: Metrics.rem * -206,
    backgroundColor: 'white',
    zIndex: 1,
    transform: [{skewY: '-70deg'}],
  },
  whiteContainer: {
    width: Metrics.rem * 500,
    height: Metrics.rem * 320,
    backgroundColor: 'white',
    zIndex: 1,
  },
  lampRope: {
    width: Metrics.rem * 2,
    height: Metrics.rem * 150, // 210
    backgroundColor: 'black',
    position: 'absolute',
    top: Metrics.rem * 300,
    right: Metrics.rem * 150,
    borderRadius: Metrics.rem,
    zIndex: 1,
  },
  switch: {
    width: Metrics.rem * 30,
    height: Metrics.rem * 30,
    borderRadius: Metrics.rem * 15,
    backgroundColor: 'black',
    position: 'absolute',
    top: Metrics.rem * 445, // 480
    right: Metrics.rem * 136.5,
  },
  gradient: {
    width: Metrics.WIDTH,
    height: Metrics.rem * 580,
    position: 'absolute',
    top: 0,
  },
});
