import { Image, Pressable, StyleSheet } from "react-native"
import {  CirclePlus } from 'lucide-react-native'


const IconButton = () => {
  return (
    <Pressable>
      <CirclePlus size={40} color={'#8BC652'} strokeWidth={1.5}/>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: '#8BC652'
  }
})