import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import realm, { addAnimalToPark } from '../../schemas/Animal'


const Park = () => {
  const route = useRoute();
  const title = route.params.title
  const description = route.params.location
  console.log(route.params)

  return (
    <SafeAreaView>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </SafeAreaView>
  )
}

export default Park

const styles = StyleSheet.create({})