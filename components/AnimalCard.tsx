import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import CardButton from "./CardButton"
import { AnimalCardProps } from "../types/types"

const cardWidth = Dimensions.get('window').width * 0.95

const AnimalCard = ({title, points, image}: AnimalCardProps) => {
  return (
    <View style={styles.animalCardContainer}>
      <Image 
        source={image}
        style={styles.animalImage}
      />
      <View>
        <Text style={styles.animalTitle}>{title}</Text>
        <Text style={styles.animalPoints} >Points: {points}</Text>
      </View>
      <CardButton title="View" />
    </View>
  )
}

export default AnimalCard

const styles = StyleSheet.create({
  animalCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexShrink: 0,
    minHeight: 100,
    height: 140,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  animalImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  animalTitle: {
    fontSize: 24,
    fontWeight: '700'
  },
  animalPoints: {
    fontSize: 16,
    fontWeight: '700'
  }
})