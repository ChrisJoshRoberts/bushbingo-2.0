import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native"
import GamesCard from "../GamesCard"
import IconButton from "../buttons/IconButton";

const { width } = Dimensions.get('window')
const cardWidth = width * 0.9;
const spacing = 12

const data = [
  {id: '1', title: 'Test Game', status: 'Pending', image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/A-tender-moment-between-Lioness-and-cub.jpg'},
  {id: '2', title: 'Second Game', status: 'Started', image: 'https://beta-planet.gvi.co.uk/wp-content/uploads/2023/04/1821893948-2023-apr-07-16-49-55-000000-giraffe-in-the-bush-of-kruger-national-park-south-2022-08-31-04-29-37-utc.jpg'},
  {id: '3', title: 'Third Game', status: 'Completed', image: 'https://cxgveiouca.cloudimg.io/familyhotelfinder.com/wp-content/uploads/Kruger-Park6-SH.jpg?w=960&h=540&func=cover'},
]

const GamesCarousel = () => {

  {data.length === 0 && 
    <View>
      <Text>No Games yet</Text>
      <Text>Start new game</Text>
      <IconButton />
    </View>
  }

  return (
    <View style={{width: width, height: 240}}>
      <FlatList 
        horizontal
        style={{paddingVertical: 10}}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={cardWidth + spacing}
        contentContainerStyle={{paddingHorizontal: spacing / 2}}
        renderItem={({item}) => 
        <GamesCard title={item.title} status={item.status} image={item.image}  />
        }
      />
    </View>
  )
}

export default GamesCarousel
