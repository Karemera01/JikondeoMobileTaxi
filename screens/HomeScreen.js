import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import {useDispatch} from 'react-redux';

import {setOrigin,setDestination } from '../slices/navSlices';
import NavFavourites from '../components/NavFavourites';



const HomeScreen = () => {
  const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw `bg-white h-full`}>
            <View style={tw `p-5`}>
                <Image 
                source={{uri:"https://media.istockphoto.com/vectors/taxi-private-car-rideshare-mobile-phone-app-icon-design-vector-id488905206?k=6&m=488905206&s=170667a&w=0&h=QxEkA6KWMAhBuGG3uoQExjqaxXylEyRWHjntkTbpwHM="}}
                 style={{width:80,height:50,resizeMode:"contain"}}  
                   />
                   <Text style={tw `font-bold mb-3 text-xl`}>JIKONDEO</Text>
           <GooglePlacesAutocomplete
           placeholder="Where From?"
           styles={styles}
           
           onPress={(data,details=null)=>{
               dispatch(
                   setOrigin({
                   location:details.geometry.location,
                   description:data.description
                   
               }))
               dispatch(setDestination(null));

            //    console.log(data);
            //    console.log(details);
           }}
           fetchDetails={true}
           returnKeyType={"search"}
           enablePoweredByContainer={false}
           minLength={2}
           query={{
               key:GOOGLE_MAPS_APIKEY,
               language:"en",
           }}
           nearbyPlacesAPI="GooglePlacesSearch"
           debounce={100}
           
           />
            <NavOptions/>
            <NavFavourites/>
           

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

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
