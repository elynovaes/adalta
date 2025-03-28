import { Text, Image, View } from "react-native";
import Button from "./button";

const Card = ({ textContent, click, sourceImage }) => {
  return (
    <Button 
      content={
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Image 
            source={sourceImage}
            style={{
              position: "absolute",
              width: 160,
              height: 300,
            }}
          />
          <Text style={
            {
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              textAlignVertical: "center",
              zIndex: 1, // Garante que o texto fique acima da imagem
              backgroundColor: "rgba(0, 23, 71, 0.65)",
              height: 300,
              width: 160,
            }
          }>
            {textContent}
          </Text>
        </View>
      }
      buttonStyles={{
        alignItems: "center",
        justifyContent: "center",
        width: 160,
        height: 300,
        borderRadius: 10,
        overflow: "hidden",
      }}
      click={click}
    />
  );
};

export default Card;