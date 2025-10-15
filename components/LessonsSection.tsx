import { FlatList, Text, View } from "react-native";
import lessons from "../mock/lessons.json";
import LessonCard from "./LessonCar";

function LessonsSection() {
  return (
    <View className="w-full h-full flex-1 flex-col gap-4">
      <FlatList
        data={lessons}
        ListHeaderComponent={() => (
          <Text className="text-2xl text-text font-bold mb-4">Lecciones</Text>
        )}
        ItemSeparatorComponent={() => <View className="h-2" />}
        ListFooterComponent={() => <View className="h-4" />}
        renderItem={({ item }) => (
          <LessonCard lesson={item} key={item.id.toString()} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default LessonsSection;
