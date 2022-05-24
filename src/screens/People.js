import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPeople} from '../redux/actions';
import styles from '../styles/People';

const People = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.People);

  useEffect(() => {
    dispatch(getPeople());
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
            <Text style={styles.title}>Height:</Text>
            <Text style={styles.description}>{val?.height} cm</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Weight:</Text>
            <Text style={styles.description}>{val?.mass} kg</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Hair color:</Text>
            <Text style={styles.description}>{val?.hair_color}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Skin color:</Text>
            <Text style={styles.description}>{val?.skin_color}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Eye color:</Text>
            <Text style={styles.description}>{val?.eye_color}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Gender:</Text>
            <Text style={styles.description}>{val?.gender}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default People;
