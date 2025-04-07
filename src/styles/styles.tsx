import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.tertiary,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  containerOS: {
    flexDirection: 'column',
    gap: 10,
  }
});

export default styles