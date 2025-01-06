import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native"
import AnimalCard from "../cards/AnimalCard"
import SectionTitle from "../SectionTitle"

const AnimalData = [
  {id: '1', title: 'Lion', points: 10, image: require('../../assets/images/animals/male-lion.png'), category: 'Big Cats', status: 'Safe', diet: 'Carnivore', lifespan: '20 years'},
  {id: '2', title: 'Elephant', points: 8, image: require('../../assets/images/animals/male-elephant.png'), category: 'Mammals', status: 'Protected', diet: 'Herbivore', lifespan: '60 years'},
  {id: '3', title: 'Girrafe', points: 12, image: require('../../assets/images/animals/giraffe.png'), category: 'Mammals', status: 'Secure', diet: 'Herbivore', lifespan: '25 years'},
  {id: '4', title: 'Rhino', points: 15, image: require('../../assets/images/animals/rhino.png'), category: 'Big Five', status: 'Protected', diet: 'Herbivore', lifespan: '40 years'},
]

const { width } = Dimensions.get('window')

const AnimalCarousel = () => {
  return (
    <View style={styles.animalCardContainer}> 
      <SectionTitle title='All Animals' /> 
      <FlatList 
        data={AnimalData}
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
    </View>
  )
}

export default AnimalCarousel

const styles = StyleSheet.create({
  animalCardContainer: {
    width: width,
    justifyContent: 'center',
    marginBottom: 116
  }
})