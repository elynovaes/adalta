import { Pressable, Text } from "react-native";
import buttonStyle from "../styles/buttonStyles";

const Button = ({ content, buttonStyles, click }) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        buttonStyles,
        pressed && buttonStyle.buttonPressed
      ]}
      onPress={click}
    >
      <Text>{content}</Text>
    </Pressable>
  );
}

export default Button;