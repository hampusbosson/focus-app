import { useState } from "react";
import { Text, View, Button } from "react-native";
import TimerModal from "../components/TimerModal";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
 
  const openModal = () => {
    setModalVisible(true);
  }
  
  const closeModal = () => {
    setModalVisible(false);
  } 
  return (
    <View className="flex-1 items-center justify-center bg-black">
      {modalVisible && (
        <TimerModal onClose={closeModal}/>
      )}
      <Text className="text-white text-2xl my-6">Welcome to Focus App</Text>
      <Button title="Start focus timer" onPress={openModal} />
      
    </View>
  );
}
