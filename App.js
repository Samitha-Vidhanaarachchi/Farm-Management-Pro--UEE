import { Root } from "native-base";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./Component/Dashboard/Dashboard";
import SignIn from "./Component/Register/register";
import { Assets } from "expo-asset";
import { AppLoading } from "expo";
import AnimalView from "./Component/MyAnimals/AnimalView";
import PurchaseCategoryView from "./Component/Purchases/PurchaseCategoryView";
import registration from "./Component/Register/registration";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { color } from "react-native-reanimated";
import { DrawerContent } from "./Component/DrawerContent";
import PadocksFieldView from "./Component/Crop&Field/PadocksFieldView";
import CroporFieldEventView from "./Component/Crop&Field/CroporFieldEventView";
import AddAnimalView from "./Component/MyAnimals/AddAnimalView";
import purchaseAdd from "./Component/Purchases/purchaseAdd";
import profile from "./Component/Profile/Profile";
import EditAnimal from "./Component/MyAnimals/EditAnimal";
import SearchAnimalView from "./Component/MyAnimals/SearchAnimalView";
import AnimalSorted from "./Component/MyAnimals/AnimalSorted";
import TaskView from "./Component/FarmTasks/TaskView";
import AddTask from "./Component/FarmTasks/AddTask";
import AddCropField from "./Component/Crop&Field/AddCropField";
import NewFieldView from "./Component/Crop&Field/NewField";
import AddCropEvent from "./Component/Crop&Field/AddCropEvent";
import SearchPurchases from "./Component/Purchases/SearchPurchases";
import EditPurchases from "./Component/Purchases/EditPurchases";
import sortedPurchases from "./Component/Purchases/sortedPurchases";
import EditCropEvent from "./Component/Crop&Field/EditCropEvent";
import EditPaddock from "./Component/Crop&Field/EditPaddock";
import SortPaddock from "./Component/Crop&Field/SortPaddock";
import SearchTasks from "./Component/FarmTasks/SearchTasks";
import SortTasks from "./Component/FarmTasks/SortTasks";
import EditTask from "./Component/FarmTasks/EditTask";
import SearchPaddock from "./Component/Crop&Field/SearchPaddock";
import SearchCropEvent from "./Component/Crop&Field/SearchCropEvent";
import SortCropEvents from "./Component/Crop&Field/SortCropEvents";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.Prefetch(image);
    } else {
      return Assets.fromModule(image).downloadAsync();
    }
  });
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="AppDrawer"
        component={AppDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnimalView"
        component={AnimalView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PurchaseCategoryView"
        component={PurchaseCategoryView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="registration"
        component={registration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PadocksFieldView"
        component={PadocksFieldView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CroporFieldEventView"
        component={CroporFieldEventView}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="purchaseAdd"
        component={purchaseAdd}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="profile"
        component={profile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EditAnimal"
        component={EditAnimal}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SearchAnimalView"
        component={SearchAnimalView}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AnimalSorted"
        component={AnimalSorted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskView"
        component={TaskView}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddCropField"
        component={AddTask}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewFieldView"
        component={AddTask}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddCropEvent"
        component={AddTask}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SearchPurchases"
        component={SearchPurchases}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditPurchases"
        component={EditPurchases}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="sortedPurchases"
        component={sortedPurchases}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditCropEvent"
        component={AddTask}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditPaddock"
        component={AddTask}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SearchTasks"
        component={SearchTasks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTask}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SortTasks"
        component={SortTasks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchPaddock"
        component={SortTasks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SortPaddock"
        component={SortTasks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchCropEvent"
        component={SortTasks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SortCropEvents"
        component={SortCropEvents}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppDrawer = () => {
  return (
    <Root>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="DashboardDrawer" component={Dashboard} />
        <Drawer.Screen
          name="PurchasesDrawer"
          component={PurchaseCategoryView}
        />
        <Drawer.Screen name="AnimalViewDrawer" component={AnimalView} />
        <Drawer.Screen name="AddAnimalViewDrawer" component={AddAnimalView} />
        <Drawer.Screen name="purchaseAddDrawer" component={purchaseAdd} />
        <Drawer.Screen name="profileDrawer" component={profile} />
        <Drawer.Screen name="EditAnimalDrawer" component={EditAnimal} />
        <Drawer.Screen name="EditPurchasesDrawer" component={EditPurchases} />
        <Drawer.Screen name="NewFieldViewDrawer" component={NewFieldView} />
        <Drawer.Screen name="AddCropEventDrawer" component={AddCropEvent} />
        <Drawer.Screen name="EditCropEventDrawer" component={EditCropEvent} />
        <Drawer.Screen name="AddCropFieldDrawer" component={AddCropField} />
        <Drawer.Screen name="EditPaddockDrawer" component={EditPaddock} />
        <Drawer.Screen name="SearchPaddockDrawer" component={SearchPaddock} />
        <Drawer.Screen name="SortPaddockDrawer" component={SortPaddock} />
        <Drawer.Screen
          name="SearchCropEventDrawer"
          component={SearchCropEvent}
        />
        <Drawer.Screen name="SortCropEventsDrawer" component={SortCropEvents} />

        <Drawer.Screen
          name="sortedPurchasesDrawer"
          component={sortedPurchases}
        />
        <Drawer.Screen
          name="SearchPurchasesDrawer"
          component={SearchPurchases}
        />
        <Drawer.Screen
          name="SearchAnimalViewDrawer"
          component={SearchAnimalView}
        />
        <Drawer.Screen name="TaskViewDrawer" component={TaskView} />
        <Drawer.Screen name="AddTaskDrawer" component={AddTask} />
        <Drawer.Screen
          name="PadocksFieldViewDrawer"
          component={PadocksFieldView}
        />
        <Drawer.Screen
          name="CroporFieldEventViewDrawer"
          component={CroporFieldEventView}
        />
        <Drawer.Screen name="AnimalSortedDrawer" component={AnimalSorted} />
        <Drawer.Screen name="EditTaskDrawer" component={EditTask} />
        <Drawer.Screen name="SearchTasksDrawer" component={SearchTasks} />
        <Drawer.Screen name="SortTasksDrawer" component={SortTasks} />
      </Drawer.Navigator>
    </Root>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("./assets/bg.jpg")]);
    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    );
  }
}
