import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Login from './screens/Login';
export default function App() {
  // NavigationContainer => BrowserRouter dans react (Router)
  const { Screen, Navigator } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Screen name='Welcome' component={Welcome} />
        <Screen name='Login' component={Login} />
        <Screen name='Home' component={Home} />
      </Navigator>
    </NavigationContainer>
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
