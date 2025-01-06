import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native"
import AnimalCard from "../cards/AnimalCard"
import SectionTitle from "../SectionTitle"

const AnimalData = [
  {id: '1', title: 'Lion', points: 10, image: require('../../assets/images/animals/male-lion.png'), category: 'Big Cats'},
  {id: '2', title: 'Elephant', points: 8, image: require('../../assets/images/animals/male-elephant.png'), category: 'Mammals'},
  {id: '3', title: 'Girrafe', points: 12, image: require('../../assets/images/animals/giraffe.png'), category: 'Mammals' },
  {id: '4', title: 'Rhino', points: 15, image: require('../../assets/images/animals/rhino.png'), category: 'Big Five' },
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
          <AnimalCard title={item.title} points={item.points} image={item.image} category={item.category} />
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