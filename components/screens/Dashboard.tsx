import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ProfileHeader from '../ProfileHeader'
import GamesCarousel from '../carousels/GamesCarousel'
import ParksCarousel from '../carousels/ParksCarousel'
import AnimalCarousel from '../carousels/AnimalCarousel'
import { StatusBar } from 'expo-status-bar'

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <ProfileHeader /> 
      <GamesCarousel />
      <ParksCarousel />
      <AnimalCarousel />
    </ScrollView>
    <StatusBar style="dark" />
  </SafeAreaView>

  )
}

export default Dashboard

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