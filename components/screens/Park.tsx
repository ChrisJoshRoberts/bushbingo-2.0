import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Park = () => {
  const route = useRoute();
  console.log(route.params)
  return (
    <SafeAreaView>
      <Text>{route.params?.title}</Text>
    </SafeAreaView>
  )
}

export default Park

const styles = StyleSheet.create({})