import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1
  },
  image: {
    height: 150,
    aspectRatio: 4 / 3,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap'
  },
  comicsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1

  },
  comics: {
    fontSize: 20,
    marginRight: 5
  }
});
