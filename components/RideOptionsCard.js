import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import NavigateCard from './NavigateCard';
import Footer from './Footer';
import { selectTravelTimeInformation } from '../slices/navSlices';
import { useSelector } from 'react-redux';

const data = [
    {
        id: "Taxi-Regular-123",
        title: "Regular",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Taxi-Van-456",
        title: "Van",
        multiplier: 1.5,
        image: "https://links.papareact.com/5w8",
    }
]


const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    const SURGE_CHARGE_RATE = 1.5;
    return (
        <SafeAreaView style={`tw bg-white flex-grow`}>
            <View>
                <TouchableOpacity style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
                    onPress={() => navigation.navigate("NavigateCard")}

                >
                    <Icon name="chevron-left" type="fontawesome" />

                </TouchableOpacity>

                <Text style={tw`text-center py-5 text-xl`}> Select A Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (

                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-10 mb-5 ${
                            id === selected?.id && "bg-gray-200"
                            }`}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",

                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
                        </View>
                        <Text style={tw`text-xl font-bold `}>
                            {new Intl.NumberFormat("en-gb", {
                                style: "currency",
                                currency: "USD",
                            }).format(
                                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                            )
                            }
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={tw`mt-auto border-t border-gray-200`} >
                <TouchableOpacity
                    disabled={!selected}
                    style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                    <Text style={tw`text-center text-white text-xl font-bold`}>Choose {selected?.title}  </Text>

                </TouchableOpacity>


            </View>

        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
