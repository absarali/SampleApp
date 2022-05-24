import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.05,
  },
  greetingTxt: {
    color: '#eeeeee',
    fontSize: 14,
    letterSpacing: 1.2,
  },
  userTxt: {
    color: '#f3f6f4',
    fontSize: 16,
    letterSpacing: 1.2,
  },
  avatarImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  option: {
    marginRight: width * 0.05,
    backgroundColor: '#3d85c6',
    height: 30,
    paddingHorizontal: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionTxt: {
    color: '#bcbcbc',
    fontSize: 16,
    letterSpacing: 1.2,
  },
});
