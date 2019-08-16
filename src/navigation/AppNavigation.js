import { createAppContainer, createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigation';

const AppContainer = createAppContainer(TabNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;
