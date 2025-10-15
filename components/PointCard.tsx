import { Text, View } from "react-native";
import { IconTrash } from "./Icons";

interface Point {
  id: number;
  name: string;
  distance: number;
  type: string;
  isOpen: boolean;
}

function PointCard({ point }: { point: Point }) {
  return (
    <View className="w-full bg-background rounded-xl p-4 flex-row gap-4 items-center">
      <IconTrash />
      <View className="flex-1 flex-col gap-2">
        <Text className="text-text text-md font-bold">{point.name}</Text>
        <Text className="text-text text-sm">
          {point.type} · {point.distance} km
        </Text>
      </View>
      <View className="">
        <Text
          className="text-sm font-bold"
          style={{ color: point.isOpen ? "#4ADE80" : "#F87171" }}
        >
          {point.isOpen ? "Abierto" : "Cerrado"}
        </Text>
      </View>
    </View>
  );
}

export default PointCard;
