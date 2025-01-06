import { Animated, SafeAreaView, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useRef } from 'react'
import ProfileHeader from '../ProfileHeader'
import GamesCarousel from '../carousels/GamesCarousel'
import ParksCarousel from '../carousels/ParksCarousel'
import AnimalCarousel from '../carousels/AnimalCarousel'
import { StatusBar } from 'expo-status-bar'

const Dashboard = ({ setScrollY }: any) => {
  const scrollY = useRef(new Animated.Value(0)).current
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: true, 
      listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        setScrollY(event.nativeEvent.contentOffset.y);
      },
    }
  )
  return (
    <SafeAreaView style={styles.container}>
    <Animated.ScrollView
      onScroll={onScroll}
      scrollEventThrottle={16}
    >
      <ProfileHeader /> 
      <GamesCarousel />
      <ParksCarousel />
      <AnimalCarousel />
    </Animated.ScrollView>
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