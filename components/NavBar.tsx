import { StyleSheet, TouchableOpacity, View } from "react-native"
import NavIcon from "./NavIcon"
import { LayoutDashboard, Eye,  MessageCircleMore, UserRound } from "lucide-react-native"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"

const dashboardIconActive = <LayoutDashboard size={24} color={'#fff'} fill={'#fff'}/>
const sightingsIcon = <Eye size={24} color={'#fff'} strokeWidth={1.5}/>
const messagesIcon =  <MessageCircleMore size={24} color={'#fff'} strokeWidth={1.5}/>
const profileIcon = <UserRound size={24} color={'#fff'} strokeWidth={1.5}/>


const NavBar = (props: BottomTabBarProps) => {
  const routes = props.state.routes

  return (
    <View style={styles.navContainer}>
      {routes.map((route, index) => {
        const isFocused = props.state.index === index
        const icon = route.name === "Home"
          ? <LayoutDashboard size={24} color={isFocused ? "#8BC652" : "#fff"} fill={isFocused ? "#8BC652" : "#003324"} strokeWidth={isFocused ? 1.5 : 1} />
          : route.name === "Sightings"
          ? <Eye size={24} color={isFocused ? "#8BC652" : "#fff"} strokeWidth={isFocused ? 1.5 : 1} fill={isFocused ? "#8BC652" : "#003324"} stroke={isFocused? "#003324" : "#fff"}/>
          : route.name === "Messages"
          ? <MessageCircleMore size={24} color={isFocused ? "#8BC652" : "#fff"} fill={isFocused ? "#8BC652" : "#003324"} strokeWidth={isFocused ? 1.5 : 1} />
          : <UserRound size={24} color={isFocused ? "#8BC652" : "#fff"} fill={isFocused ? "#8BC652" : "#003324"} strokeWidth={isFocused ? 1.5 : 1} />;

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => {
              console.log(route.name)
              props.navigation.navigate(route.name)}}
            >
            <NavIcon 
              key={route.name}
              title={route.name}
              image={icon}
            />
          </TouchableOpacity>
        )
      })}
    </View>

    
  )
}

export default NavBar

const styles = StyleSheet.create({
  navContainer: {
    paddingHorizontal: 8,
    position: 'absolute',
    left: 10,
    bottom: 24,
    height: 70,
    backgroundColor: '#003324',
    alignItems: 'center',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius : 10
  }
})