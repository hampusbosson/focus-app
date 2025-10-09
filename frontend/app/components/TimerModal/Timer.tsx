import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Sliders from './Slider';

const Timer = () => {
    const [minutes, setMinutes] = useState(5);


  return (
    <View className=" bg-gray-500 p-4 w-[80%] h-[40%] rounded-2xl items-center justify-center flex-col gap-4">
      <View className='flex flex-row justify-center items-center gap-10'>
        <View className='w-32 h-32 border-4 border-white rounded-full items-center justify-center'>
            <Text className='text-4xl font-semibold text-black'>{minutes}</Text>
        </View>
        <View className='w-32 h-32 border-4 border-white rounded-full items-center justify-center'>
            <Text className='text-4xl font-semibold text-black'>00</Text>
        </View>
      </View>
      <View className='w-40 h-10 border border-white rounded-lg items-center justify-center'>
        <Text className='text-white font-semibold'>Minutes</Text>
      </View>
      <View>
        <Sliders minutes={minutes} setMinutes={setMinutes}/>
      </View>
    </View>
  )
}

export default Timer