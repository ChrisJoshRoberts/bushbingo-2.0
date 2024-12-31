import { Text, View } from "react-native"
import { SectionTitleProps } from "../types/types"
import TextButton from "./buttons/TextButton"


const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10}}>
        <Text style={{fontSize: 22, fontWeight: 700}}>{title}</Text>
        <TextButton />
      </View>
  )
}

export default SectionTitle