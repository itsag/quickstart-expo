// Modules
import React from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts as useSansFont,
  Inter_400Regular as InterRegular,
  Inter_700Bold as InterBold,
} from "@expo-google-fonts/inter";
import {
  useFonts as useDisplayFont,
  Urbanist_700Bold as UrbanistBold,
} from "@expo-google-fonts/urbanist";

// Navigators
import { AppNavigator } from "app-navigator";

// NOTE:
// Keep the splash screen visible while we do startup work.
// It is recommended to call this in global scope without awaiting,
// rather than inside React components or hooks, because otherwise
// this might be called too late, when the splash screen is already hidden.
SplashScreen.preventAutoHideAsync();

// Component: Presentation
export const AppSplashUi = ({ isAppReady, onLayoutRootView }) => {
  if (isAppReady) {
    return (
      <View onLayout={onLayoutRootView} className="w-full h-full">
        <AppNavigator />
      </View>
    );
  }

  return null;
};

// Component: Logic
export const AppSplash = () => {
  // Hooks
  const [isSansFontLoaded] = useSansFont({
    Inter_400Regular: InterRegular,
    Inter_700Bold: InterBold,
  });
  const [isDisplayFontLoaded] = useDisplayFont({
    Urbanist_700Bold: UrbanistBold,
  });

  // State
  const [isAppReady, setIsAppReady] = React.useState(false);

  // On Layout Root View
  const onLayoutRootView = React.useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  React.useEffect(() => {
    if (isSansFontLoaded && isDisplayFontLoaded) {
      setIsAppReady(true);
    }
  }, [isSansFontLoaded, isDisplayFontLoaded]);

  return (
    <AppSplashUi isAppReady={isAppReady} onLayoutRootView={onLayoutRootView} />
  );
};
