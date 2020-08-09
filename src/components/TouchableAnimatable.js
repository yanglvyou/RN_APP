import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {createAnimatableComponent, View, Text} from 'react-native-animatable';
import Slider from '@react-native-community/slider';
import AnimationCell from '@/components/AnimationCell';
import GROUPED_ANIMATION_TYPES from '@/assets/grouped-animation-types.json';

const AnimatableSectionList = createAnimatableComponent(SectionList);

const COLORS = [
  '#65b237', // green
  '#346ca5', // blue
  '#a0a0a0', // light grey
  '#ffc508', // yellow
  '#217983', // cobolt
  '#435056', // grey
  '#b23751', // red
  '#333333', // dark
  '#ff6821', // orange
  '#e3a09e', // pink
  '#1abc9c', // turquoise
  '#302614', // brown
];

const NATIVE_INCOMPATIBLE_ANIMATIONS = [
  'jello',
  'lightSpeedIn',
  'lightSpeedOut',
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  slider: {
    height: 30,
    margin: 10,
  },
  toggle: {
    width: 120,
    backgroundColor: '#333',
    borderRadius: 3,
    padding: 5,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 10,
    color: 'rgba(255, 255, 255, 1)',
  },
  toggledOn: {
    color: 'rgba(255, 33, 33, 1)',
    fontSize: 16,
    transform: [
      {
        rotate: '8deg',
      },
      {
        translateY: -20,
      },
    ],
  },
  sectionHeader: {
    backgroundColor: '#F5FCFF',
    padding: 15,
  },
  sectionHeaderText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default class TouchableAnimatable extends PureComponent {
  state = {
    duration: 1000,
    toggledOn: false,
  };

  textRef = null;
  handleTextRef = (ref) => {
    this.textRef = ref;
  };

  handleDurationChange = (duration) => {
    this.setState({duration: Math.round(duration)});
  };

  handleRowPressed = (componentRef, animationType) => {
    componentRef.setNativeProps({
      style: {
        zIndex: 1,
      },
    });
    componentRef.animate(animationType, this.state.duration).then(() => {
      componentRef.setNativeProps({
        style: {
          zIndex: 0,
        },
      });
    });
    if (this.textRef) {
      this.textRef[animationType](this.state.duration);
    }
  };

  render() {
    const {duration, toggledOn} = this.state;
    return (
      <AnimationCell
        animationType={item}
        color={COLORS[index % COLORS.length]}
        onPress={this.handleRowPressed}
        useNativeDriver
      />
    );
  }
}
