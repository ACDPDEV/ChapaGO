import { FlatList, Text, View } from "react-native";
import points from "../mock/points.json";
import Map from "./Map";
import PointCard from "./PointCard";

function MainSection() {
  return (
    <View className="w-full h-full flex-1 flex-col gap-4">
      <FlatList
        data={points}
        ListHeaderComponent={() => (
          <>
            <Text className="text-2xl text-text font-bold mt-4 mb-2">
              Mapa verde
            </Text>
            <Map />
            <Text className="text-text text-xl font-bold mt-4 mb-4">
              Puntos cercanos
            </Text>
          </>
        )}
        ItemSeparatorComponent={() => <View className="h-2" />}
        ListFooterComponent={() => <View className="h-4" />}
        renderItem={({ item }) => (
          <PointCard point={item} key={item.id.toString()} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default MainSection;
