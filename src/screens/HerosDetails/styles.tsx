import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loading: {
    flex: 1,
  },
  background: {
    backgroundColor:'#f0131e',
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  titleBackground: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 0,
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    fontSize: 20,
    color: 'white',
    padding: 20,
  }
});