import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Footer = () => {
    return (
        <View style={tw `bg-gray-700 py-8 mt-4 pt-3`}>
               
                    <Text style={tw `text-center text-white text-xl font-bold`}>JIKONDEO Taxi</Text>
               
            </View>
    )
}

export default Footer

const styles = StyleSheet.create({})
