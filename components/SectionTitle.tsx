import { StyleSheet, Text, View } from "react-native"
import { SectionTitleProps } from "../types/types"
import TextButton from "./buttons/TextButton"
import colors from "../constants/Colors"



const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>{title}</Text>
        <TextButton />
      </View>
  )
}

export default SectionTitle

const styles = StyleSheet.create({
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: colors.primaryGreen
  }
})
