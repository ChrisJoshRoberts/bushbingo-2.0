import { Image, StyleSheet, Text, View } from "react-native"
import colors from "../constants/Colors"

const ProfileHeader = () => {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={{uri: 'https://lh3.googleusercontent.com/ogw/AF2bZyhWlQcSN_wA9b_achjqL3hgr-IENfatyMVWdLg55HHvvfQ=s64-c-mo'}}
        width={50}
        height={50}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.profileTitle}>Welcome Chris</Text>
        <Text style={styles.profileRank}><Text style={styles.profileRankTag}>Rank: </Text>Explorer</Text>
      </View>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
  profileContainer: {
    paddingVertical: 16,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 100,
    marginRight: 8
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: colors.primaryGreen
  },
  profileRankTag: {
    color: colors.orange,   
    fontWeight: 700
  },
  profileRank: {
    color: colors.primaryGreen,
  }

})