import { icons } from '@/constants/icons'
import React, { Component } from 'react'
import { Image, TextInput, View } from 'react-native'

interface Props {
  placeholder?: string; 
  onPress?: () => void;
  value?: string;
  onChangeText ?: (text:string)=> void;
}

export class SearchBar extends Component <Props> {
  render() {
    const { placeholder, onPress, value, onChangeText } = this.props;
    return (
      <View className='flex flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
        <Image
        source={icons.search} className='size-6' resizeMode='contain' tintColor={"#ab8bff"}/>
        <TextInput
            onPress={onPress}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor='#a8b5db'
            className='flex-1 ml-2 text-white text-xl'/>
      </View>
    )
  }
}

export default SearchBar
