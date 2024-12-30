import { FlatList, View } from "react-native"
import AnimalCard from "../AnimalCard"

const AnimalData = [
  {id: '1', title: 'Lion', points: 10, image: ''},
  {id: '2', title: 'Elephant', points: 8, image: ''},
  {id: '3', title: 'Girrafe', points: 12, image: ''}
]


const AnimalCarousel = () => {
  return (
    <View>
      <FlatList 
        data={AnimalData}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
          <AnimalCard />
        }
      />
    </View>
  )
}

export default AnimalCarousel