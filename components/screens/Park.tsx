import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import realm, { addAnimalToPark } from '../../schemas/Animal'

type ParkAnimal = {
  id: string;
  parkId: string;
  animalId: string;
}

const Park = () => {
  const [parkAnimals, setparkAnimals] = useState<ParkAnimal[]>([])

  useEffect(() => {
    const fetchedParkAnimals = realm.objects('ParkAnimal')
    const fetchedAnimals = realm.objects('Animal')
    const parkAnimalsArray = fetchedParkAnimals.map((parkAnimal) => {
      return {
        id: parkAnimal.id as string,
        parkId: parkAnimal.parkId as string,
        animalId: parkAnimal.animalId as string,
      }
    })
    setparkAnimals(parkAnimalsArray)
    addAnimalToPark(1, 1)
    console.log('park animals: ' ,parkAnimals)
  }, [])

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