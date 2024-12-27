import { Image, StyleSheet, Text, View } from "react-native"
import { GamesCardProps } from "../types/types"

const GamesCard = ({title, status}: GamesCardProps) => {
  return (
    <View style={styles.gameContainer}>
      <Image
        source={{uri: 'https://www.andbeyond.com/wp-content/uploads/sites/5/A-tender-moment-between-Lioness-and-cub.jpg'}}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      /> 
      <View style={{padding: 10}}>
        <Text style={styles.gameTitle}>{title}</Text>
        <Text style={styles.statusTitle}>{status}</Text>
      </View>
    </View>
  )
}

export default GamesCard

const styles = StyleSheet.create({
  gameContainer : {
    overflow:'hidden',
    width: '100%',
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    minHeight: 100,
    justifyContent: 'flex-end',
  },
  gameTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 700
  },
  statusTitle: {
    color: '#000'
  }
})