import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import ProfileHeader from './components/ProfileHeader';
import ParkCard from './components/ParkCard';
import AnimalCard from './components/AnimalCard';
import GamesCarousel from './components/carousels/GamesCarousel';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader /> 
      <GamesCarousel />
      <ParkCard />
      <AnimalCard />
      <NavBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
});
