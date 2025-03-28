import { View } from 'react-native';

import styles from 'styles/styles';

import Card from 'components/cards';

import serviceCard from '../../assets/ServiceCard.png';
import workCard from '../../assets/WorkCard.jpg';
import projectCard from '../../assets/ProjectCard.jpg';
import comercialCard from '../../assets/ComercialCard.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={
        {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 25,
        }
      }>
        <Card textContent={'Service'} click={undefined} sourceImage={serviceCard}/>
        <Card textContent={'Obras'} click={undefined} sourceImage={workCard}/>
        <Card textContent={'Projetos'} click={undefined} sourceImage={projectCard}/>
        <Card textContent={'Comercial'} click={undefined} sourceImage={comercialCard}/>
      </View>
    </View>
  );
};

export default Home;