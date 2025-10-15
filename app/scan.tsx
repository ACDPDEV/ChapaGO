import ScanSection from "@/components/ScanSection";
import { View } from "react-native";

export default function Scan() {
  return (
    <View className="flex-1 bg-foreground w-full h-full mt-4 mb-4">
      <ScanSection />
    </View>
  );
}
