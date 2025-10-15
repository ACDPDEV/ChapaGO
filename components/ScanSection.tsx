import { Pressable, Text, View } from "react-native";
import { IconCamera } from "./Icons";

function ScanSection() {
  return (
    <View className="bg-background w-full h-full p-4 flex-col gap-4 rounded-xl">
      <View className="w-full flex-grow justify-center items-center">
        <View className="w-16 h-16 justify-center items-center rounded-full bg-foreground">
          <IconCamera />
        </View>
      </View>
      <Pressable className="w-full py-2 bg-green-500 rounded-md justify-center items-center shadow-xl shadow-green-500/50">
        <Text className="text-foreground text-lg font-bold">
          Escanear un residuo para clasificarlo
        </Text>
      </Pressable>
    </View>
  );
}

export default ScanSection;
