import { Image, Pressable, StyleSheet } from "react-native"


const IconButton = () => {
  return (
    <Pressable>
      <Image 
        source={{uri: 'https://www.iconpacks.net/icons/2/free-plus-icon-3107-thumb.png'}}
        width={30}
        height={30}
        style={styles.iconContainer}
      />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: '#8BC652'
  }
})