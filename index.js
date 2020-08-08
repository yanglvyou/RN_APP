/**
 * @format
 */

import {AppRegistry,YellowBox} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
    `Can't perform a React state update on an unmounted component.`,
    'FlatList: Calling `getNode()` on the ref of an Animated component is no longer necessary.',
    `Can't perform a React state update on an unmounted component`,
    'source.uri should not be an empty string',
  ])

AppRegistry.registerComponent(appName, () => App);
