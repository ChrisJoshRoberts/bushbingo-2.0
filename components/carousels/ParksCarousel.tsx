import { Dimensions, FlatList, Text, View, ImageSourcePropType } from "react-native"
import ParkCard from "../cards/ParkCard"
import TextButton from "../buttons/TextButton"
import SectionTitle from "../SectionTitle"
import { useEffect, useState } from "react"
import realm from "../../schemas/Animal"

type Park = {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;
}

const imageMap : Record<string, any> = {
  '../../assets/images/parks/Kruger-gate.jpg': require('../../assets/images/parks/Kruger-gate.jpg'),
  '../../assets/images/parks/Addo-gate.jpeg': require('../../assets/images/parks/Addo-gate.jpeg'),
}

const { width } = Dimensions.get('window')

const ParksCarousel = () => {
  const [parks, setParks] = useState<Park[]>([])

  useEffect(() => {
    const fetchedParks = realm.objects('Park')

    const parkArray = fetchedParks.map((park) => {
      return {
        id: park.id as number,
        name: park.name as string,
        description: park.description as string,
        image: imageMap[park.imagePath as string],
        location: park.location as string
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
          <ParkCard title={item.name} location={item.location} image={item.image}/>
        )}
      />
    </View>
  )
}

export default ParksCarousel