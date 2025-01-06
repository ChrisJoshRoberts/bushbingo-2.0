import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import CardButton from "../CardButton"
import { AnimalCardProps } from "../../types/types"

const cardWidth = Dimensions.get('window').width * 0.95

const AnimalCard = ({title, points, image, category}: AnimalCardProps) => {
  return (
    <View style={styles.animalCardContainer}>
      <Image 
        source={image}
        style={styles.animalImage}
        resizeMode="contain"
      />
      <View style={styles.cardContentContainer}>
        <Text style={styles.animalCategory}>{category}</Text>
        <Text style={styles.animalTitle}>{title}</Text>
        <View style={styles.pointsContainer}>
          <View style={styles.innerCardDetialContainer}> 
            <Text>Points</Text>
            <Text style={styles.animalPoints}>{points}</Text>
          </View>
          <View>
            <Text>Rarity</Text>
            <Text style={styles.animalPoints}>{points}</Text>
          </View>
        </View>
      </View>
      <CardButton title="View" />
    </View>
  )
}

export default AnimalCard

const styles = StyleSheet.create({
  animalCardContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexShrink: 0,
    minHeight: 100,
    height: 190,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.02,
    shadowRadius: 3.84,
  },
  animalImage: {
    width: 100,
    height: '90%',
    borderRadius: 10,
    backgroundColor: '#0033241A',
    margin: 10
  },
  cardContentContainer : {
    flex: 1,
    height: '100%',
    paddingVertical: 16,
    alignItems: 'flex-start',
    gap: 4
  },
  animalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003324'
  },
  animalCategory: {
    fontSize: 10,
    fontWeight: '700',
    backgroundColor: '#F76711',
    textAlign: 'center',
    borderRadius: 5,
    padding: 4,
    color: '#F5EBE2'
  },
  animalPoints: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003324'
  },
  pointsContainer: {
    backgroundColor: '#0033241A',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    width: '95%',
  },
  innerCardDetialContainer: {
    marginRight: 24,
  }
})