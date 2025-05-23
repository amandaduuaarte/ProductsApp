import {AppRegistry} from 'react-native';
import {App} from './src/App/App';
import {name as appName} from './app.json';
import './gesture-handler.native';

AppRegistry.registerComponent(appName, () => App);
