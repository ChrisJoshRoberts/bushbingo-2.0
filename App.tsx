
import NavBar from './components/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './components/screens/Dashboard';
import Sightings from './components/screens/Sightings';
import Messages from './components/screens/Messages';
import Profile from './components/screens/Profile';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

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
        {() => <Dashboard setScrollY={setScrollY} />}
        </Tab.Screen>
        <Tab.Screen name="Sightings" component={Sightings} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
