import { StyleSheet, View } from "react-native"
import NavIcon from "./NavIcon"
import PlusButton from "./buttons/PlusButton"
import { LayoutDashboard, Eye,  MessageCircleMore, UserRound } from "lucide-react-native"

const dashboardIconActive = <LayoutDashboard size={24} color={'#fff'} fill={'#fff'}/>
const sightingsIcon = <Eye size={24} color={'#fff'} strokeWidth={1.5}/>
const messagesIcon =  <MessageCircleMore size={24} color={'#fff'} strokeWidth={1.5}/>
const profileIcon = <UserRound size={24} color={'#fff'} strokeWidth={1.5}/>


const NavBar = () => {
  return (
    <View style={styles.navContainer}>
      <NavIcon title={'Home'} image={dashboardIconActive} /> 
      <NavIcon title={'Sightings'} image={sightingsIcon} /> 
      <PlusButton />
      <NavIcon title={'messages'} image={messagesIcon} /> 
      <NavIcon title={'profile'} image={profileIcon} /> 
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