import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import CardButton from "../buttons/CardButton"
import { AnimalCardProps } from "../../types/types"
import colors from "../../constants/Colors"

const cardWidth = Dimensions.get('window').width * 0.95

const AnimalCard = ({title, points, image, category, status, diet, lifespan}: AnimalCardProps) => {
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
              <Text style={styles.innerTitle}>Status</Text>
              <Text style={styles.animalStatus}>{status}</Text>
          </View>
          <View style={styles.innerCardDetialContainer}>
              <Text style={styles.innerTitle}>Lifespan</Text>
              <Text style={styles.animalStatus}>{lifespan}</Text>
          </View>
          <View> 
              <Text style={styles.innerTitle}>Points</Text>
              <Text style={styles.animalPoints}>{points}</Text>
          </View>
        </View>
        {/* <View style={{height: '30%',justifyContent: 'center'}}>
          <Text style={{color: '#8BC652', fontWeight: 700}}>Diet: <Text style={{color: '#003324'}}>{diet}</Text></Text>
        </View> */}
      </View>
      {/* <CardButton title="View" /> */}
    </View>
  )
}

export default AnimalCard

const styles = StyleSheet.create({
  animalCardContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexShrink: 0,
    minHeight: 100,
    height: 134,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.02,
    shadowRadius: 3.84,
  },
  animalImage: {
    width: '30%',
    height: '100%',
  },
  cardContentContainer : {
    flex: 1,
    height: '100%',
    paddingVertical: 16,
    alignItems: 'flex-start',
    gap: 4,
    marginLeft: 1
  },
  animalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primaryGreen
  },
  animalCategory: {
    fontSize: 10,
    fontWeight: '700',
    backgroundColor: colors.orange,
    textAlign: 'center',
    borderRadius: 5,
    padding: 4,
    color: '#fff'
  },
  animalPoints: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryGreen
  },
  animalStatus: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primaryGreen
  },
  pointsContainer: {
    backgroundColor: '#0033240D',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    width: '96%',
    justifyContent: 'space-between',
  },
  innerCardDetialContainer: {
    paddingRight: 5
  },
  innerTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primaryGreen,
    opacity: 0.75
  }
})