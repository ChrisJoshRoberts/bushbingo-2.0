import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import ProfileHeader from './components/ProfileHeader';
import GamesCarousel from './components/carousels/GamesCarousel';
import ParksCarousel from './components/carousels/ParksCarousel';
import AnimalCarousel from './components/carousels/AnimalCarousel';
import NavBar from './components/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './components/screens/Dashboard';
import Sightings from './components/screens/Sightings';
import Messages from './components/screens/Messages';
import Profile from './components/screens/Profile';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: 'red'}
        }}
        tabBar={(props) => <NavBar {...props} />}
      >
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Sightings" component={Sightings} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
