import { Pressable, Text, View } from "react-native";

interface TimerModalProps {
  onClose: () => void;
}

const TimerModal = ({ onClose }: TimerModalProps) => {
  return (
    <View>
      <View className="absolute inset-0 z-10 items-center justify-center bg-black/50">
        {/* Centered panel */}
        <View className="w-[80%] h-[25%] bg-slate-600 rounded-2xl p-4">
          <Pressable onPress={onClose} className="absolute left-4 top-4">
            <Text className="text-white">Close</Text>
          </Pressable>

          <View className="flex-1 items-center justify-center">
            <Text className="text-white">Timer Modal</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimerModal;
