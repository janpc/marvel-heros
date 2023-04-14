import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1 / 1.55,
  },
  title: {
    fontSize: 16,
    color: 'white',
    flex: 1,
    flexWrap: 'wrap',
    padding: 5,
    paddingBottom: 10
  },
});
