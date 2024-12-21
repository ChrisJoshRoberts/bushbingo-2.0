import { Image, StyleSheet, Text, View } from "react-native"


const GamesCard = () => {
  return (
    <View style={styles.gameContainer}>
      <Image /> 
      <View style={{flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
        <Text style={styles.gameTitle}>Game Name:</Text>
        <Text style={styles.statusTitle}>Game Status</Text>
      </View>
    </View>
  )
}

export default GamesCard

const styles = StyleSheet.create({
  gameContainer : {
    padding: 12,
    marginVertical: 16,
    width: '95%',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  gameTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 700
  },
  statusTitle: {
    color: '#fff'
  }
})