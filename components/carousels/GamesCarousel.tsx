import { Dimensions, FlatList, StyleSheet, View } from "react-native"
import GamesCard from "../GamesCard"

const { width } = Dimensions.get('window')
const data = [
  {id: '1', title: 'Test Game', status: 'Pending'},
  {id: '2', title: 'Second Game', status: 'Started'},
  {id: '3', title: 'Third Game', status: 'Completed'},
]

const GamesCarousel = () => {
  return (
    <View style={{width: '100%', height: 240}}>
      <FlatList 
        horizontal
        style={{paddingVertical: 5, backgroundColor: 'red'}}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
        <GamesCard title={item.title} status={item.status} />
        }
        contentContainerStyle={styles.gameCarouselContainer}
        pagingEnabled
        snapToInterval={width}
        decelerationRate="fast"
      />
    </View>
  )
}

export default GamesCarousel

const styles = StyleSheet.create({
  gameCarouselContainer: {
    gap: 10,
    paddingHorizontal: 12
  }
})