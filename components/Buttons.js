import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'

const Buttons = ({title, onPress, bgColor}) => {
  return (
    <TouchableOpacity 
        style={[styles.buttonContainer, {backgroundColor: {bgColor}}]} 
        onPress={onPress}
    >
        <Text
            style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}
        >
            {title}
        </Text> 
    </TouchableOpacity>
  )
}

export default Buttons

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});