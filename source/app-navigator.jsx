// Modules
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";

// Dummy Screens
const ScreenOne = () => <Text className="font-sans">Screen One</Text>;
const ScreenTwo = () => <Text className="font-sans">Screen Two</Text>;

// Create Navigators
const Stack = createNativeStackNavigator();

// Component: Presentation
export const AppNavigatorUi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Component: Logic
export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <AppNavigatorUi />

      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
};
