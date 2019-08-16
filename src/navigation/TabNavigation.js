import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Blogs, Posts, Comments, TestScreen } from '../screens';
import ModalScreen from '../screens/ModalScreen';

const BlogStack = createStackNavigator({
  Blogs,
  Posts,
  Comments,
});

const MainBlog = createStackNavigator(
  {
    Main: BlogStack,
    Modal: ModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: MainBlog,
    Test: TestScreen,
  },
  {
    initialRouteName: 'Test',
  }
);

export default TabNavigator;
