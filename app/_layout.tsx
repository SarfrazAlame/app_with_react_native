import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Appearance } from 'react-native';

import { Colors } from "@/constants/Colors"

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme()

  const theme = colorScheme == 'dark' ? Colors.dark : Colors.light

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: theme.headerBackground },
      headerTintColor: theme.text, headerShadowVisible: false
    }}>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
      <Stack.Screen name="menu" options={{ headerShown: true, title: 'Menu', headerTitle: 'Coffee Shop Menu' }} />
      <Stack.Screen name="contact" options={{ headerShown: true, title: 'contact', headerTitle: 'Contact Us' }} />
      {/* <Stack.Screen name="menu" options={{ headerShown: true, title: 'menu', headerTitle: 'Menu' }} /> */}
      {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name='index' options={{ title: "Home", headerShown:false}} /> */}
      {/* <Stack.Screen name='contract' options={{ title: "Contact Us", headerShown: true }} /> */}
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}
