import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getSpecies} from '../redux/actions';
import styles from '../styles/Species';

const Species = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.Species);

  useEffect(() => {
    dispatch(getSpecies());
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
            <Text style={styles.title}>Classification:</Text>
            <Text style={styles.description}>{val?.classification}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Designation:</Text>
            <Text style={styles.description}>{val?.designation}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Average height:</Text>
            <Text style={styles.description}>{val?.average_height}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Skin colors:</Text>
            <Text style={styles.description}>{val?.skin_colors}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Hair colors:</Text>
            <Text style={styles.description}>{val?.hair_colors}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Eye colors:</Text>
            <Text style={styles.description}>{val?.eye_colors}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Average Lifespan:</Text>
            <Text style={styles.description}>{val?.average_lifespan}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Language:</Text>
            <Text style={styles.description}>{val?.language}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Species;
