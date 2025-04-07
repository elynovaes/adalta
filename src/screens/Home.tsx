import { View, ScrollView } from 'react-native';

import styles from 'styles/styles';

import SearchBar from 'components/searchBar';
import CardOS from 'components/cardOS';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchBar onFilterPress={() => console.log("abrir filtros")} />
        <View style={styles.containerOS}>
          <CardOS />
          <CardOS />
          <CardOS />
          <CardOS />
          <CardOS />
          <CardOS />
          <CardOS />
          <CardOS />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;