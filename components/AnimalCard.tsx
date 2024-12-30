import { StyleSheet, View } from "react-native"
import CardButton from "./CardButton"


const AnimalCard = ({title, points, image}: AnimalCardProps) => {
  return (
    <View style={styles.animalCardContainer}>
      <CardButton title="View" />
    </View>
  )
}

export default AnimalCard

const styles = StyleSheet.create({
  animalCardContainer: {
    width: '95%',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    flex: 0.2,
    flexShrink: 0,
    minHeight: 100,
  }
})