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
  Profile,
  Login,
  CreateAccount,
  CreateNewPost,
} from '../screens';

// import ModalScreen from '../screens/ModalScreen';

export const AuthStack = createStackNavigator(
  {
    Auth: AuthMain,
    SignIn: Login,
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
    Modal: CreateNewPost,
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
  Account: Profile,
  Test: TestScreen,
  Home: MainBlog,
  // Auth: AuthStack,
});

export default App;
