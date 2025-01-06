import { StyleSheet, View } from "react-native"
import NavIcon from "./NavIcon"
import PlusButton from "./buttons/PlusButton"
import { LayoutDashboard } from "lucide-react-native"

const dashboardIcon = <LayoutDashboard size={24} color={'#fff'} />


const NavBar = () => {
  return (
    <View style={styles.navContainer}>
      <NavIcon title={'Home'} image={dashboardIcon} /> 
      <NavIcon title={'Sightings'} image={require('../assets/images/nav-icons/binoculars@x2.png')} /> 
      <PlusButton />
      <NavIcon title={'messages'} image={require('../assets/images/nav-icons/chat-bubble-1@x3.png')} /> 
      <NavIcon title={'profile'} image={require('../assets/images/nav-icons/user@x3.png')} /> 
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  navContainer: {
    paddingHorizontal: 8,
    position: 'absolute',
    bottom: 24,
    height: 70,
    backgroundColor: '#003324',
    alignItems: 'center',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius : 18
  }
})