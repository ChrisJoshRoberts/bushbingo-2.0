import { Image, Pressable, StyleSheet, View } from "react-native"
import { Plus } from 'lucide-react-native'
import colors from "../../constants/Colors"


const PlusButton = () => {
  return (
    <Pressable>
      <View style={styles.plusButtonContainer}>
        <Plus size={48} color={'#fff'} />
      </View>
    </Pressable>
  )
}

export default PlusButton

const styles = StyleSheet.create({
  plusButtonContainer: {
    width: 85,
    height: 85,
    borderRadius: 100,
    backgroundColor: colors.secondaryGreen,
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