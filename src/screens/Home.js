import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Films from './Films';
import People from './People';
import Planet from './Planet';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';
import styles from '../styles/Home';

const App = () => {
  const options = [
    {name: 'Films'},
    {name: 'People'},
    {name: 'Planets'},
    {name: 'Species'},
    {name: 'Starships'},
    {name: 'Vehicles'},
  ];

  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingTxt}>Hello,</Text>
          <Text style={styles.userTxt}>Swapi</Text>
        </View>
        <Image
          resizeMode="cover"
          style={styles.avatarImg}
          source={require('../../assets/avatar.png')}
        />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {options.map((val, index) => (
            <TouchableOpacity
              key={`Key${index + 1}`}
              style={[
                styles.option,
                selected !== index ? {backgroundColor: '#252525'} : null,
                index === options.length - 1 ? {marginRight: 0} : null,
              ]}
              onPress={() => setSelected(index)}>
              <Text
                style={[
                  styles.optionTxt,
                  selected === index ? {color: 'black'} : null,
                ]}>
                {val.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {selected === 0 ? (
        <Films />
      ) : selected === 1 ? (
        <People />
      ) : selected === 2 ? (
        <Planet />
      ) : selected === 3 ? (
        <Species />
      ) : selected === 4 ? (
        <Starships />
      ) : selected === 5 ? (
        <Vehicles />
      ) : null}
    </View>
  );
};

export default App;
