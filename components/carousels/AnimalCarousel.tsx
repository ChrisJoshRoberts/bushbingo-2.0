import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native"
import AnimalCard from "../cards/AnimalCard"
import SectionTitle from "../SectionTitle"
import colors from "../../constants/Colors"
import { useEffect, useState } from "react"
import realm from "../../schemas/Animal"


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