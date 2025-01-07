import { Pressable} from "react-native"
import {  CirclePlus } from 'lucide-react-native'
import colors from "../../constants/Colors"


const IconButton = () => {
  return (
    <Pressable>
      <CirclePlus size={40} color={colors.secondaryGreen} strokeWidth={1.5}/>
    </Pressable>
  )
}

export default IconButton
