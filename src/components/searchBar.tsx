import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from 'styles/colors';

const SearchBar = ({ onFilterPress }) => {
  return (
    <View style={styles.container}>
      <Feather  name="search" size={20} color={colors.primary} style={styles.icon}/>
      <TextInput
        placeholder="Pesquisar e Filtrar"
        placeholderTextColor="rgba(0, 0, 0, 0.3)"
        style={styles.input}
      />
      <TouchableOpacity onPress={onFilterPress}>
        <Feather name="sliders" size={20} color={colors.primary} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 18,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    marginHorizontal: 4,
  }
});

export default SearchBar;