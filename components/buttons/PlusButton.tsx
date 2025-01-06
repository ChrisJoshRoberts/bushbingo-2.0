import { Image, StyleSheet, View } from "react-native"
import IconButton from "./IconButton"


const PlusButton = () => {
  return (
    <View style={styles.plusButtonContainer}>
      <Image 
        source={require('../../assets/images/nav-icons/plus-icon@x1.5.png')}
      />
    </View>
  )
}

export default PlusButton

const styles = StyleSheet.create({
  plusButtonContainer: {
    width: 85,
    height: 85,
    borderRadius: 100,
    backgroundColor: '#8BC652',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})