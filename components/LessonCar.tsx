import { Text, View } from "react-native";

interface Lesson {
  id: number;
  name: string;
  description: string;
  duration: number;
  languages: string[];
  link: string;
}

function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <View className="w-full bg-background rounded-xl p-4 flex-row gap-4 items-center">
      <View className="flex-1 flex-col gap-2">
        <Text className="text-text text-md font-bold">{lesson.name}</Text>
        <Text className="text-text text-sm">{lesson.description}</Text>
      </View>
      <View className="">
        <Text className="text-sm font-bold">{lesson.duration} min</Text>
      </View>
    </View>
  );
}

export default LessonCard;
