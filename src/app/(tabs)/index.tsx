import useTheme from "@/hooks/useTheme";
import { Text, TouchableOpacity, View } from "react-native";
import { createHomeStyles } from "../../../assets/styles/home.styles";
export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <View style={homeStyles.container}>
      <Text>My App</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}
