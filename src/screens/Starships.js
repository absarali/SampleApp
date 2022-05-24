import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getStarships} from '../redux/actions';
import styles from '../styles/Starships';

const Starships = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.Starships);

  useEffect(() => {
    dispatch(getStarships());
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
            <Text style={styles.title}>Hyperdrive Rating:</Text>
            <Text style={styles.description}>{val?.hyperdrive_rating}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>MGLT:</Text>
            <Text style={styles.description}>{val?.MGLT}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Starship Class:</Text>
            <Text style={styles.description}>{val?.starship_class}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Starships;
