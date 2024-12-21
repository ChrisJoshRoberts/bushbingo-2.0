import { Image, StyleSheet, Text, View } from "react-native"


const ParkCard = () => {
  return (
    <View style={styles.parkCardContainer}>
      <View style={styles.parkImage}></View>
      <View>
        <Text>Park Name</Text>
        <Text>Location</Text>
      </View>
    </View>
  )
}

export default ParkCard

const styles = StyleSheet.create({
  parkCardContainer: {
    width: '55%',
    borderRadius: 10,
    backgroundColor: 'red'
  },
  parkImage: {
    width: '100%',
    height: 140,
    backgroundColor: '#D9D9D9',
    borderRadius: 10
  }
})