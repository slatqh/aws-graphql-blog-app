import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Blogs, Posts, Comments } from '../screens';

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

const TabNavigator = createBottomTabNavigator({
  Home: BlogStack,
});

export default TabNavigator;
