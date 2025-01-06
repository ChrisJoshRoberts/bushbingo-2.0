import { Image, StyleSheet, View } from "react-native"
import { Plus } from 'lucide-react-native'


const PlusButton = () => {
  return (
    <View style={styles.plusButtonContainer}>
      <Plus size={48} color={'#fff'} />
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