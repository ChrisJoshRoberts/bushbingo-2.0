import NavBar from './components/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './components/screens/Dashboard';
import Sightings from './components/screens/Sightings';
import Messages from './components/screens/Messages';
import Profile from './components/screens/Profile';
import { useState } from 'react';
import Park from './components/screens/Park';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Create a separate stack navigator for the Home tab
function HomeStack({ setScrollY }: { setScrollY: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard">
        {() => <Dashboard setScrollY={setScrollY} />}
      </Stack.Screen>
      <Stack.Screen name="Park">
        {() => <Park  />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}


export default function App() {
  const [scrollY, setScrollY] = useState(0);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: 'red'}
        }}
        tabBar={(props) => <NavBar {...props} scrollY={scrollY} />}
      >
        <Tab.Screen name="Home">
        {() => <HomeStack setScrollY={setScrollY} />}
        </Tab.Screen>
        <Tab.Screen name="Sightings" component={Sightings} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
