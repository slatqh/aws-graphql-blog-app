import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Text } from 'react-native';
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
  Settings,
  ProfileUpdate,
} from '../screens';

// import ModalScreen from '../screens/ModalScreen';

export const AuthStack = createStackNavigator(
  {
    Auth: AuthMain,
    ProfileUpdate,
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

const ProfileStack = createStackNavigator(
  {
    Profile,
    Settings,
  },
  {
    defaultNavigationOptions: {
      title: 'Profile',
      headeMode: 'none',
    },
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
  Account: ProfileStack,
  Test: TestScreen,
  Home: MainBlog,
  // Auth: AuthStack,
});

export default App;
