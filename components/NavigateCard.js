import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import tw  from 'tailwind-react-native-classnames';

import { GOOGLE_MAPS_APIKEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination } from '../slices/navSlices';
import {useDispatch} from "react-redux";
import { useNavigation } from '@react-navigation/native';

import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch =useDispatch();
    const navigation=useNavigation();
    return (
        <SafeAreaView style={tw `bg-white flex-1`}>
            <Text style={tw `text-center py-5 text-xl`}>Good Morning, Gerard</Text>
            <View style={tw `border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                    placeholder="where To?"
                    styles={styles}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    minLength={2}
                    onPress={(data,details=null)=>{
                        dispatch(setDestination({
                            location:details.geometry.location,
                            description:data.description,
                        }))
                        navigation.navigate('RideOptionsCard')

                    }}
                    query={{
                        key:GOOGLE_MAPS_APIKEY,
                        language:"en",
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    />
                </View>
                <NavFavourites/>
            </View>
            {/* <View style={tw `flex flex-col justify-center items-center py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity style={tw `flex flex-row bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name="car" type="font-awesome" color="white" size={16}/>
                    <Text style={tw `text-white text-center`}>Rides</Text>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex:0
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:18,


    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    }
})
