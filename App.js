import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView, Text, View, SafeAreaView, Platform } from 'react-native';

import { Provider } from "react-redux";
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
          behavior={Platform.OS ==="ios"? "padding":"height"}
          style={{flex:1}}>
            <Stack.Navigator>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }} />
              <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={{ headerShown: false }} />

            </Stack.Navigator>



          </KeyboardAvoidingView>

          {/* <HomeScreen/> */}
        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
