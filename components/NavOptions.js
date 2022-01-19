import React from 'react'
import {  Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import tw  from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../screens/MapScreen';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlices';



const data=[{
    id:"123",
    title:"Get a ride",
    image:"https://links.papareact.com/3pn",
    screen:"MapScreen",
}
// {
// id:"456",
// title:"Order Food",
// image:"https://links.papareact.com/28w",
// screen:"EatsScreen",
// }
];

const NavOptions = () => {
    const navigation=useNavigation();
    const origin =useSelector(selectOrigin);
    return (
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity style={tw `p-2 pl-6 pb-8 bg-blue-100 m-2 w-80`}
            onPress={()=>navigation.navigate(item.screen)}
            disabled={!origin}
            >
                {/* <View style={tw `${!origin && "opacity-20"}`}> */}
                    <View style={tw `flex flex-col justify-center items-center`}>
                    <Image style={{width:120,height:120,resizeMode:"contain"}}
                    source={{uri:item.image}}/>
                    <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                    style={tw `p-2 bg-black rounded-full w-10 mt-4`}
                    
                    name="rightcircle" color="grey" type="antdesign"/>
                </View>

            </TouchableOpacity>

        )}
        
        />
     
            
        
    )
}

export default NavOptions


