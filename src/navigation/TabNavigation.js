import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import {
  Blogs,
  Posts,
  Comments,
  TestScreen,
  PostDetails,
  AuthMain,
  Login,
  CreateAccount,
} from '../screens';

import ModalScreen from '../screens/ModalScreen';

export const AuthStack = createStackNavigator(
  {
    Auth: AuthMain,
    Login,
    Signup: CreateAccount,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    initialRouteName: 'Auth',
  }
);

const BlogStack = createStackNavigator(
  {
    Blogs,
    Posts,
    PostDetails,
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

const App = createBottomTabNavigator({
  Auth: AuthStack,
  Home: MainBlog,
  Test: TestScreen,
});

export default App;
