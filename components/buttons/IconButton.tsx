import { Image, Pressable } from "react-native"


const IconButton = () => {
  return (
    <Pressable>
      <Image 
        source={{uri: 'https://www.iconpacks.net/icons/2/free-plus-icon-3107-thumb.png'}}
        width={50}
        height={50}
      />
    </Pressable>
  )
}

export default IconButton