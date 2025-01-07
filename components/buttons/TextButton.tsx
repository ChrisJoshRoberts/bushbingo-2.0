import { Pressable, Text } from "react-native"
import colors from "../../constants/Colors"


const TextButton = () => {
  return (
    <Pressable>
      <Text style={{color: colors.orange , fontWeight: 600}}>
        View All
      </Text>
    </Pressable>
  )
}

export default TextButton