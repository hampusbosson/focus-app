import { Pressable, Text, View } from "react-native";
import Timer from "./Timer";

interface TimerModalProps {
  onClose: () => void;
}

const TimerModal = ({ onClose }: TimerModalProps) => {
  return (
    <View className="absolute inset-0 z-20 items-center justify-center bg-black/50 w-full h-full">
      <View className="flex-1 items-center justify-center w-full h-full gap-6">
        <Timer />
        <View className="flex flex-col gap-4 items-center">
          <View>
            <Pressable className="border-white border rounded-lg px-10 py-2">
              <Text className="text-white font-bold text-2xl">Start Focus Timer</Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={onClose}
              className="border-white border rounded-lg bg-red-600 px-10 py-2 items-center justify-center"
            >
              <Text className="text-white font-bold text-2xl">Back</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimerModal;
