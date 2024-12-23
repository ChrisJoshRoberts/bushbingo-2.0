import { StyleSheet, View } from "react-native"
import NavIcon from "./NavIcon"


const NavBar = () => {
  return (
    <View style={styles.navContainer}>
      <NavIcon title={'Home'} image={require('../assets/images/nav-icons/dashboard.png')} /> 
      <NavIcon title={'Sightings'} image={require('../assets/images/nav-icons/binoculars.png')} /> 
      <NavIcon title={'messages'} image={require('../assets/images/nav-icons/chat-bubble-1.png')} /> 
      <NavIcon title={'profile'} image={require('../assets/images/nav-icons/user.png')} /> 
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    bottom: 32,
    height: 64,
    backgroundColor: '#B2B2B2',
    alignItems: 'center',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius : 10
  }
})