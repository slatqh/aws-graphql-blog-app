import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Blogs, Posts, Comments, TestScreen } from '../screens';
import ModalScreen from '../screens/ModalScreen';

const BlogStack = createStackNavigator(
  {
    Blogs,
    Posts,
    Comments,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const title = navigation.getParam('titleName');
      return {
        title: title === undefined ? 'Home' : title,
      };
    },
  }
);

const MainBlog = createStackNavigator(
  {
    Main: BlogStack,
    Modal: ModalScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Home',
    },
    mode: 'modal',
    headerMode: 'none',
  }
);

const TabNavigator = createBottomTabNavigator({
  Test: TestScreen,
  Home: MainBlog,
});

export default TabNavigator;
