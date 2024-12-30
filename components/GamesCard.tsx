import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"
import { GamesCardProps } from "../types/types"
import { LinearGradient } from 'expo-linear-gradient';


const cardWidth = Dimensions.get('window').width * 0.90

const GamesCard = ({title, status, image}: GamesCardProps) => {
  return (
    <Pressable>
      <ImageBackground 
        source={{uri: image}}
        resizeMode="cover"
        style={styles.gameContainer}
      >
        <LinearGradient
          colors={[ "transparent", "rgba(0, 0, 0, 0.8)",]}
          style={styles.contentContainer}>
          <Text style={styles.gameTitle}>{title}</Text>
          <Text style={styles.statusTitle}>{status}</Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  )
}

export default GamesCard

const styles = StyleSheet.create({
  gameContainer : {
    width: cardWidth,
    height: 200,
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    minHeight: 100,
    justifyContent: 'flex-end',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden'
  },
  contentContainer : {
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  gameTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 700
  },
  statusTitle: {
    color: '#fff'
  }
})