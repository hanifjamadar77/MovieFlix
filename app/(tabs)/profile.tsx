import { icons } from '@/constants/icons'
import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export class profile extends Component {
  render() {
    return (
      <View className='bg-primary flex-1 px-10'>
        <View className='flex justify-center items-center flex-1 flex-col gap-5'>
            <Image source={icons.person} className="size-10" tintColor="#Fff"/>
        
              <Text className='text-gray-500 text-base'>Profile</Text>
        </View>
      </View>
    )
  }
}

export default profile
