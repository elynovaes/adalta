import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import colors from "styles/colors";

const CardOS = () => {
  return (
    <Pressable style={({ pressed }) => [
      pressed && { opacity: 0.5, transform: [{ scale: 0.95 }] }, 
    ]} >
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 19, fontWeight: 'bold',  color: colors.tertiary }}>OS 2288 - Farmace</Text>
          <Text style={{ fontSize: 14,  color: colors.tertiary, marginTop: 10 }}>CO - HVAC</Text>
        </View>
        <View>
          <Text style={{ fontSize: 19, fontWeight: 'bold',  color: colors.tertiary }}>Data de Entrega</Text>
          <Text style={{ fontSize: 14,  color: colors.tertiary, marginTop: 10 }}>20/05/2025</Text>
        </View>
      </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    width: 350,
    height: 90,
    borderRadius: 12,
    shadowOpacity: 0.25,
    shadowRadius: 2.25,
    elevation: 10,
    padding: 13,
  },
})




export default CardOS;