import { Dimensions, FlatList, Text, View } from "react-native"
import ParkCard from "../ParkCard"
import TextButton from "../buttons/TextButton"

const { width } = Dimensions.get('window')

const data = [
  {id: '1', title: 'Kruger National Park', image: 'https://img.getaway.co.za/wp-content/uploads/2021/10/Kruger-gate-Twitter.width-800.jpg', location: 'Limpopo' },
  {id: '2', title: 'Addo Elephant Park', image: 'https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDllNzFmMDlhLTJiMTYtNDhmZS1hZGFjLWRlZDcyMTY4MGQ5MQ?w=625&h=440&fit=crop&auto=enhance,format,compress&q=80', location: 'Eastern Cape' },
  {id: '3', title: 'Table Mountain National Park', image: 'https://b-cdn.springnest.com/media/img/m8/atae1a11c4d1be.png?aspect_ratio=1200%3A630&width=1200', location: 'Western Cape' },
]


const ParksCarousel = () => {
  return (
    <View style={{width: width, height: 260,}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10}}>
        <Text style={{fontSize: 22, fontWeight: 700}}>Parks</Text>
        <TextButton />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ParkCard title={item.title} image={item.image} location={item.location} />
        )}
      />
    </View>
  )
}

export default ParksCarousel