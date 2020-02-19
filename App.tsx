import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Menu } from './src/Menu';

// @ts-ignore
const MainNavigator = createStackNavigator(Menu);

const App = createAppContainer(MainNavigator);

export default App;