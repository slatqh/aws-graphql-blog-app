import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AuthLoadingScreen } from "../screens";
import App, { AuthStack } from "./TabNavigation";

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
export default AppContainer;
