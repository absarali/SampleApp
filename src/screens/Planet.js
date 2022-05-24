import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPlanets} from '../redux/actions';
import styles from '../styles/Planet';

const Planet = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.Planets);

  useEffect(() => {
    dispatch(getPlanets());
  }, []);
  return (
    <ScrollView style={styles.main}>
      {data?.length === 0 ? (
        <ActivityIndicator color="#3d85c6" size="large" />
      ) : null}
      {data.map((val, index) => (
        <View
          key={`Key${index + 1}`}
          style={[
            styles.wrap,
            index === data.length - 1 ? {marginBottom: 0} : null,
          ]}>
          <View style={styles.info}>
            <Text style={styles.title}>Name:</Text>
            <Text style={styles.description}>{val?.name}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Rotation Period:</Text>
            <Text style={styles.description}>{val?.rotation_period}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Orbital Period:</Text>
            <Text style={styles.description}>{val?.orbital_period}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Diameter:</Text>
            <Text style={styles.description}>{val?.diameter}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Climate:</Text>
            <Text style={styles.description}>{val?.climate}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Gravity:</Text>
            <Text style={styles.description}>{val?.gravity}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Terrain:</Text>
            <Text style={styles.description}>{val?.terrain}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Surface Water:</Text>
            <Text style={styles.description}>{val?.surface_water}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Population:</Text>
            <Text style={styles.description}>{val?.surface_water}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Planet;
