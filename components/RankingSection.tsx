import { FlatList, Text, View } from "react-native";
import ranking from "../mock/ranking.json";
import NeighborhoodCard from "./NeighborhoodCard";

function RankingSection() {
  return (
    <View className="w-full h-full flex-1 flex-col gap-4">
      <FlatList
        data={ranking}
        ListHeaderComponent={() => (
          <Text className="text-2xl text-text font-bold mb-4">
            Clasificación
          </Text>
        )}
        ItemSeparatorComponent={() => <View className="h-2" />}
        ListFooterComponent={() => <View className="h-4" />}
        renderItem={({ item }) => (
          <NeighborhoodCard neighborhood={item} key={item.id.toString()} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default RankingSection;
