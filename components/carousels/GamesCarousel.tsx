import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import GamesCard from "../cards/GamesCard"
import IconButton from "../buttons/IconButton";
import colors from "../../constants/Colors";

const { width } = Dimensions.get('window')
const cardWidth = width * 0.9;
const spacing = 12

const data = [
  {id: '1', title: 'Test Game', status: 'Pending', image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/A-tender-moment-between-Lioness-and-cub.jpg'},
  {id: '2', title: 'Second Game', status: 'Started', image: 'https://beta-planet.gvi.co.uk/wp-content/uploads/2023/04/1821893948-2023-apr-07-16-49-55-000000-giraffe-in-the-bush-of-kruger-national-park-south-2022-08-31-04-29-37-utc.jpg'},
  {id: '3', title: 'Third Game', status: 'Completed', image: 'https://cxgveiouca.cloudimg.io/familyhotelfinder.com/wp-content/uploads/Kruger-Park6-SH.jpg?w=960&h=540&func=cover'},
]

const GamesCarousel = () => {

  if (data.length === 0) {
    return (
      <Pressable style={styles.noGameContainer}>
        <IconButton />
        <Text style={styles.noGameTitle}>No Games yet</Text>
        <Text style={styles.noGameText}>Start new game</Text>
      </Pressable>
    )
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

const styles = StyleSheet.create({
  noGameContainer : {
    width: 352,
    height: 170,
    marginLeft: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: colors.secondaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#E8D9CB'
  },
  noGameTitle :{
    fontSize: 18,
    fontWeight: 700,
    color: colors.primaryGreen
  },
  noGameText: {
    color: colors.orange
  }
})