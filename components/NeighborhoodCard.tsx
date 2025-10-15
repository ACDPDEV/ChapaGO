import { Text, View } from "react-native";

interface Neighborhood {
  id: number;
  name: string;
  points: number;
}

function NeighborhoodCard({ neighborhood }: { neighborhood: Neighborhood }) {
  return (
    <View className="w-full bg-background rounded-xl p-4 flex-row gap-4 items-center">
      <View className="flex-1 flex-col gap-2">
        <Text className="text-text text-md font-bold">{neighborhood.name}</Text>
        <Text className="text-text text-sm">{neighborhood.points} puntos</Text>
      </View>
    </View>
  );
}

export default NeighborhoodCard;
