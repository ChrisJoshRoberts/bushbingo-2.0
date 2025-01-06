import { Pressable, StyleSheet, Text, View, Image} from "react-native"
import { NavIconProps } from "../types/types"


const NavIcon = ({title , image} : NavIconProps) => {

  const onPressHandler = () => {
    console.log(image)
  }

  return (
    <View style={styles.tabContainer}>
      <Text>{image}</Text>
      <Text style={styles.navTitle}>{title}</Text>
    </View>
  )
}

export default NavIcon

const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTitle: {
    marginTop: 4,
    color: '#fff',
    fontWeight: 600,
    fontSize: 9,
    opacity: 0.5
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  }
})