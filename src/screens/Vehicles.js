import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getVehicles} from '../redux/actions';
import styles from '../styles/Vehicles';

const Vehicles = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.Vehicles);

  useEffect(() => {
    dispatch(getVehicles());
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
            <Text style={styles.title}>Model:</Text>
            <Text style={styles.description}>{val?.model}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Manufacturer:</Text>
            <Text style={styles.description}>{val?.manufacturer}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Cost in credits:</Text>
            <Text style={styles.description}>{val?.cost_in_credits}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>length:</Text>
            <Text style={styles.description}>{val?.length}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Speed:</Text>
            <Text style={styles.description}>
              {val?.max_atmosphering_speed}
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Crew:</Text>
            <Text style={styles.description}>{val?.crew}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Passengers:</Text>
            <Text style={styles.description}>{val?.passengers}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Cargo Capacity:</Text>
            <Text style={styles.description}>{val?.cargo_capacity}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.title}>Consumables:</Text>
            <Text style={styles.description}>{val?.consumables}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Vehicle Class:</Text>
            <Text style={styles.description}>{val?.vehicle_class}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Vehicles;
