import { Image, StyleSheet, Text, View } from "react-native"

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
        <Text><Text style={{fontWeight: 700}}>Rank:</Text>Explorer</Text>
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
    fontSize: 16,
    fontWeight: 700,
  }

})