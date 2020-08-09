/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';

if (!__DEV__) {
  const emptyFunc = () => {};
  global.console.info = emptyFunc;
  global.console.log = emptyFunc;
  global.console.warn = emptyFunc;
  global.console.error = emptyFunc;
}

LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
  `Can't perform a React state update on an unmounted component.`,
  'FlatList: Calling `getNode()` on the ref of an Animated component is no longer necessary.',
  `Can't perform a React state update on an unmounted component`,
  'source.uri should not be an empty string',
]);

AppRegistry.registerComponent(appName, () => App);
