import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  main: {
    marginTop: height * 0.03,
  },
  wrap: {
    backgroundColor: '#444444',
    marginBottom: 16,
    padding: 8,
    borderRadius: 5,
  },
  info: {
    paddingVertical: 4,
    flexDirection: 'row',
  },
  title: {color: '#fff', fontSize: 14, width: width * 0.3, letterSpacing: 1.2},
  description: {
    marginLeft: 5,
    color: '#eee',
    fontSize: 14,
    width: width * 0.55,
    letterSpacing: 1.2,
  },
});
