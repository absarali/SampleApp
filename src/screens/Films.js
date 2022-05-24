import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import format_date from '../functions/format_date';
import {getFilms} from '../redux/actions';
import styles from '../styles/Films';

const Films = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.Films);

  useEffect(() => {
    dispatch(getFilms());
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
            <Text style={styles.title}>Title:</Text>
            <Text style={styles.description}>{val?.title}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Director:</Text>
            <Text style={styles.description}>{val?.director}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Producer:</Text>
            <Text style={styles.description}>{val?.producer}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Release date:</Text>
            <Text style={styles.description}>
              {format_date({
                year: val?.release_date?.split('-')[0],
                month: val?.release_date?.split('-')[1] - 1,
                day: val?.release_date?.split('-')[2],
              })}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Films;
