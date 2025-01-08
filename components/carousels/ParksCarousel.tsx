import { Dimensions, FlatList, Text, View } from "react-native"
import ParkCard from "../cards/ParkCard"
import TextButton from "../buttons/TextButton"
import SectionTitle from "../SectionTitle"
import { useEffect, useState } from "react"
import realm from "../../schemas/Animal"

type Park = {
  id: number;
  name: string;
  description: string;
}

const { width } = Dimensions.get('window')

const data = [
  {id: '1', title: 'Kruger National Park', image: 'https://img.getaway.co.za/wp-content/uploads/2021/10/Kruger-gate-Twitter.width-800.jpg', location: 'Limpopo' },
  {id: '2', title: 'Addo Elephant Park', image: 'https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDllNzFmMDlhLTJiMTYtNDhmZS1hZGFjLWRlZDcyMTY4MGQ5MQ?w=625&h=440&fit=crop&auto=enhance,format,compress&q=80', location: 'Eastern Cape' },
  {id: '3', title: 'Table Mountain National Park', image: 'https://b-cdn.springnest.com/media/img/m8/atae1a11c4d1be.png?aspect_ratio=1200%3A630&width=1200', location: 'Western Cape' },
]


const ParksCarousel = () => {
  const [parks, setParks] = useState<Park[]>([])

  useEffect(() => {
    const fetchedParks = realm.objects('Park')

    const parkArray = fetchedParks.map((park) => {
      return {
        id: park.id as number,
        name: park.name as string,
        description: park.description as string,
      }
    })
    setParks(parkArray)
  }, [])

  return (
    <View style={{width: width, height: 260,}}>
      <SectionTitle title='All Parks' />
      <FlatList
        data={parks}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ParkCard title={item.name} location={item.description} />
        )}
      />
    </View>
  )
}

export default ParksCarousel