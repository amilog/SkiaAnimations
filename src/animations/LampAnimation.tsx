import React from 'react';
import {StyleSheet, View} from 'react-native';
import Metrics from '../constants/metrics';
import LinearGradient from 'react-native-linear-gradient';

function LampAnimation() {
  return (
      <View style={styles.view}>
      <View style={styles.lampRectangular} />
      <View style={styles.lamp} />
        <LinearGradient
          colors={['rgba(255,255,0,0.4)', 'rgba(255,255,0,0.1)']}
          style={styles.light}
        />
      <View style={styles.trapezoid} />
      <View style={styles.lampRope} />
      <View style={styles.switchBackground} />
      <View style={styles.switch} />
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
  },
  lamp: {
    width: Metrics.rem * 100,
    height: Metrics.rem * 100,
    borderRadius: Metrics.rem * 50,
    backgroundColor: 'rgba(255,255,0,1)',
    position: 'absolute',
    top: Metrics.rem * 290,
  },
  light: {
    position: 'absolute',
    top: Metrics.rem * 350,
    width: Metrics.WIDTH,
    height: Metrics.rem * 580,
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
  switchBackground: {
    width: Metrics.rem * 30,
    height: Metrics.rem * 65,
    borderRadius: Metrics.rem * 30,
    backgroundColor: '#DDDDDD',
    position: 'absolute',
    top: Metrics.rem * 445,
    right: Metrics.rem * 136.5,
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
});
