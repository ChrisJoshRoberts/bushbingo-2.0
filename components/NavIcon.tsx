import { Pressable, StyleSheet, Text, View, Image} from "react-native"
import { NavIconProps } from "../types/types"

const NavIcon = ({title , image} : NavIconProps) => {

  const onPressHandler = () => {
    console.log(image)
  }

  return (
    <View style={styles.tabContainer}>
      <Pressable onPress={onPressHandler}>
        <Image
          source={image}
          width={20}
          height={20}
          style={styles.icon}
        />
      </Pressable>
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
    color: '#fff',
    fontWeight: 600
  },
  icon: {

  }
})