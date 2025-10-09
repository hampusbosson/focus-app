import React, { SetStateAction, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Slider, Text, Icon } from "@rneui/themed";

type SlidersComponentProps = {
    minutes: number,
    setMinutes: (value: number) => void;
};

const Sliders: React.FunctionComponent<SlidersComponentProps> = ({ minutes, setMinutes }) => {
  

  return (
    <>
      <View >
        <Slider
          value={minutes}
          onValueChange={setMinutes}
          maximumValue={120}
          minimumValue={5}
          step={5}
          allowTouchTrack
          minimumTrackTintColor="darkred"
          maximumTrackTintColor="lightgray"
          trackStyle={{
            height: 10,
            width: 200,
            borderRadius: 50,
            marginVertical: -10,
          }}
          thumbStyle={{ height: 32, width: 10, backgroundColor: "transparent", borderRadius: 16,  }}
          thumbProps={{
            children: (
               <View className="rounded-full bg-white w-8 h-8 -ml-4"/>
            ),
          }}
        />
      </View>
    </>
  );
};

export default Sliders;
