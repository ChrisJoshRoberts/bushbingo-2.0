import { StyleSheet, Text, View} from "react-native"
import { NavIconProps } from "../types/types"



const NavIcon = ({title , image, state} : NavIconProps) => {

  return (
    <View style={styles.tabContainer}>
      <Text>{image}</Text>
      <Text style={[styles.navTitle, state ? { display: 'none' } : { display: 'flex' }]}>{state ? '' : title}</Text>
    </View>
  )
}

export default NavIcon

const styles = StyleSheet.create({
  tabContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTitle: {
    width: 50,
    textAlign: 'center',
    marginTop: 4,
    color: '#fff',
    fontWeight: 600,
    fontSize: 9,
    opacity: 0.5
  },
})