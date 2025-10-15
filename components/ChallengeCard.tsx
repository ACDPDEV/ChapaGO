import { Text, View } from "react-native";
import { IconBookmark } from "./Icons";

interface Challenge {
  name: string;
  description: string;
  progress: number;
  total: number;
  reward: string;
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <View className="w-full bg-background rounded-xl p-4 flex-row gap-4 items-center">
      <IconBookmark />
      <View className="flex-1 flex-col gap-2">
        <Text className="text-text text-md font-bold">{challenge.name}</Text>
        <Text className="text-text text-sm">{challenge.description}</Text>
      </View>
      <View className="">
        <Text
          className="text-sm font-bold"
          style={{
            color:
              challenge.progress === challenge.total ? "#4ADE80" : "#F87171",
          }}
        >
          {challenge.progress}/{challenge.total}
        </Text>
      </View>
    </View>
  );
}

export default ChallengeCard;
