import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { ParkCardProps } from "../../types/types"
import { ArrowRight } from 'lucide-react-native';
import colors from "../../constants/Colors";

const pardCardWidth = Dimensions.get('window').width * 0.55

const ParkCard = ({title, location}: ParkCardProps) => {
  return (
    <View style={styles.parkCardContainer}>
      <View style={styles.parkImage}>
        <Image 
          source={{uri: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b'}}
          style={{width: '100%', height: '100%', borderRadius: 10}}
        />
      </View>
      <View style={styles.parkDetails}>
        <View>
          <Text style={styles.parkTitle}>{title}</Text>
          <Text style={{color: colors.primaryGreen, opacity: 0.5}}>{location}</Text>
        </View>
        <View>
          <Pressable>
            <ArrowRight size={24} color={colors.secondaryGreen} />  
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ParkCard

const styles = StyleSheet.create({
  parkCardContainer: {
    width: pardCardWidth,
    borderRadius: 10,
    padding: 10
  },
  parkImage: {
    width: '100%',
    height: 140,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  parkDetails: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parkTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: colors.primaryGreen
  }

})