import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import ProfileHeader from './components/ProfileHeader';
import GamesCarousel from './components/carousels/GamesCarousel';
import ParksCarousel from './components/carousels/ParksCarousel';
import AnimalCarousel from './components/carousels/AnimalCarousel';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileHeader /> 
        <GamesCarousel />
        <ParksCarousel />
        <AnimalCarousel />
      </ScrollView>
      <NavBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5EBE2'
  },
});
