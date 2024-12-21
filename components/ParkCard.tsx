import { Image, Pressable, StyleSheet, Text, View } from "react-native"

const ParkCard = () => {
  return (
    <View style={styles.parkCardContainer}>
      <View style={styles.parkImage}></View>
      <View style={styles.parkDetails}>
        <View>
          <Text style={styles.parkTitle}>Park Name</Text>
          <Text>Location</Text>
        </View>
        <View>
          <Pressable>
            <Image 
              source={require('../assets/images/arrow.png')}
            />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ParkCard

const styles = StyleSheet.create({
  parkCardContainer: {
    width: '55%',
    borderRadius: 10,
  },
  parkImage: {
    width: '100%',
    height: 140,
    backgroundColor: '#D9D9D9',
    borderRadius: 10
  },
  parkDetails: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parkTitle: {
    fontSize: 18,
    fontWeight: 700
  }

})