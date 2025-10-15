import { FlatList, Text, View } from "react-native";
import challenges from "../mock/challeges.json";
import ChallengeCard from "./ChallengeCard";

function ChallengesSection() {
  return (
    <View className="w-full h-full flex-1 flex-col gap-4">
      <FlatList
        data={challenges}
        ListHeaderComponent={() => (
          <Text className="text-2xl text-text font-bold mb-4">
            Retos chéveres
          </Text>
        )}
        ItemSeparatorComponent={() => <View className="h-2" />}
        ListFooterComponent={() => <View className="h-4" />}
        renderItem={({ item }) => (
          <ChallengeCard challenge={item} key={item.name} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default ChallengesSection;
