import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native"
import AnimalCard from "../cards/AnimalCard"
import SectionTitle from "../SectionTitle"
import colors from "../../constants/Colors"
import { useEffect, useState } from "react"
import realm from "../../schemas/Animal"

const AnimalData = [
  // {id: '1', title: 'Lion', points: 10, image: require('../../assets/images/animals/male-lion.png'), category: 'Big Cats', status: 'Safe', diet: 'Carnivore', lifespan: '20 years'},
  // {id: '2', title: 'Elephant', points: 8, image: require('../../assets/images/animals/male-elephant.png'), category: 'Mammals', status: 'Protected', diet: 'Herbivore', lifespan: '60 years'},
  // {id: '3', title: 'Girrafe', points: 12, image: require('../../assets/images/animals/giraffe.png'), category: 'Mammals', status: 'Secure', diet: 'Herbivore', lifespan: '25 years'},
  // {id: '4', title: 'Rhino', points: 15, image: require('../../assets/images/animals/rhino.png'), category: 'Big Five', status: 'Protected', diet: 'Herbivore', lifespan: '40 years'},
]

const imageMap : Record<string, any> = {
  '../../assets/images/animals/male-lion.png': require('../../assets/images/animals/male-lion.png'),
  '../../assets/images/animals/male-elephant.png': require('../../assets/images/animals/male-elephant.png'),
  '../../assets/images/animals/giraffe.png': require('../../assets/images/animals/giraffe.png'),
  '../../assets/images/animals/rhino.png': require('../../assets/images/animals/rhino.png'),
}

const { width } = Dimensions.get('window')

interface Animal {
  id: string;
  title: string;
  points: number;
  image: any;
  category: string;
  status: string;
  diet: string;
  lifespan: string;
}

const AnimalCarousel = () => {
  const [animals, setAnimals] = useState<Animal[]>([])

  useEffect(() => {
    const fetchedAnimals = realm.objects('Animal')

    const animalsArray = fetchedAnimals.map((animal) => {
      
      return {
        id: animal.id as string,
        title: animal.title as string,
        points: animal.points as number,
        image: imageMap[animal.imagePath as string],
        category: animal.category as string,
        status: animal.status as string,
        diet: animal.diet as string,
        lifespan: animal.lifespan as string,
      }
    })
    setAnimals(animalsArray)
  }, [])

  return (
    <View style={styles.animalCardContainer}> 
      <SectionTitle title='All Animals' /> 
      <FlatList 
        data={animals}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
          <AnimalCard 
            title={item.title} 
            points={item.points} 
            image={item.image} 
            category={item.category} 
            status={item.status} 
            lifespan={item.lifespan}
            diet={item.diet} />
        }
        scrollEnabled={false}
        contentContainerStyle={{alignItems: 'center'}}
      />
      <View style={styles.viewAllContainer}>
        <Text style={styles.viewAllTitle}>View all animals</Text>
      </View>
    </View>
  )
}

export default AnimalCarousel

const styles = StyleSheet.create({
  animalCardContainer: {
    width: width,
    justifyContent: 'center',
    marginBottom: 10
  },
  viewAllContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  viewAllTitle: {
    color: colors.orange,
    fontWeight: 700,
    backgroundColor: colors.primeGreen5,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5
  }
})