import { images } from '@/constants/images';
import { Link } from 'expo-router'
import React, { Component } from 'react'
import MaskedView from '@react-native-masked-view/masked-view';
import { Text, TouchableOpacity, View, Image } from 'react-native'

type Movie = {
    movie_id: string | number;
    title: string;
    poster_url: string;
};

type TrendingCardsProps = {
    movie: Movie;
    index: number;
};

const TrendingCards = ({ movie: { movie_id, title, poster_url }, index }: TrendingCardsProps) => {
    return (
     <Link href={`/movies/${movie_id}`} asChild>
        <TouchableOpacity className='w-32 relative pl-5'>
            <Image
                source={{uri:poster_url}}
                className="w-32 h-48 rounded-lg"
                resizeMode="cover"
                />

                <View className='absolute bottom-9 left-2 rounded-full py-3'>
                        <MaskedView maskElement={
                            <Text className='text-white text-6xl font-bold'>{index + 1}</Text>
                        }>
                            <Image source={images.rankingGradient} className='size-14' resizeMode='cover'/>
                        </MaskedView>
                </View>

                <Text className='text-sm font-bold mt-2 text-light-200' numberOfLines={2}>{title}</Text>
        </TouchableOpacity>
     </Link>
    )
}

export default TrendingCards
