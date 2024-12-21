import { Alert, Button, StyleSheet, View } from "react-native"
import { CardButtonProps } from "../types/types"


const CardButton = ({title}: CardButtonProps) => {
  return (
    <View style={styles.button}>
      <Button 
        title={title} 
        color={'#fff'}
        onPress={() => Alert.alert('Button Pressed')}
      />
    </View>
  )
}

export default CardButton

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#9E9E9E',
  }
}) 