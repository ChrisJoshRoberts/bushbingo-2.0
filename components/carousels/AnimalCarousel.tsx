import { Dimensions, FlatList, StyleSheet, View } from "react-native"
import AnimalCard from "../AnimalCard"

const AnimalData = [
  {id: '1', title: 'Lion', points: 10, image: require('../../assets/images/animals/male-lion.png')},
  {id: '2', title: 'Elephant', points: 8, image: require('../../assets/images/animals/male-elephant.png')},
  {id: '3', title: 'Girrafe', points: 12, image: require('../../assets/images/animals/giraffe.png')},
]

const { width } = Dimensions.get('window')

const AnimalCarousel = () => {
  return (
    <View style={styles.animalCardContainer}> 
      <FlatList 
        data={AnimalData}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
          <AnimalCard title={item.title} points={item.points} image={item.image} />
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
    marginBottom: 100
  }
})