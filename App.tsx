import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import ProfileHeader from './components/ProfileHeader';
import GamesCard from './components/GamesCard';
import ParkCard from './components/ParkCard';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader /> 
      <GamesCard />
      <ParkCard />
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
    height: '100%'
  },
});
