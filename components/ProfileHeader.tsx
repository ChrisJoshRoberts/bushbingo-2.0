import { Image, StyleSheet, Text, View } from "react-native"

const ProfileHeader = () => {
  return (
    <View style={styles.profileContainer}>
      <Image
        width={50}
        height={50}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.profileTitle}>Name</Text>
        <Text>Rank</Text>
      </View>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
  profileContainer: {
    paddingTop: 16,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  avatar: {
    backgroundColor: 'gray',
    borderRadius: 100,
    marginRight: 8
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: 700,
  }

})