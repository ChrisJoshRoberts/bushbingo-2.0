import { StyleSheet, View} from 'react-native'
import React from 'react'
import colors from '../constants/Colors'

const SpacerLine = () => {
  return (
    <View style={styles.spacerLine} ></View>
  )
}

export default SpacerLine

const styles = StyleSheet.create({
  spacerLine: {
    height: 0.5, 
    backgroundColor: colors.primeGreen50, 
    width: '95%', 
    marginLeft: 10, 
    marginVertical: 10,
    opacity: 0.35
  }
})