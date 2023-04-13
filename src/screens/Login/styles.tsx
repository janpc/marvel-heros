import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  logo: {
    width: '100%',
    maxWidth: 300,
    height: 120,
    marginBottom: 100,
    padding: 10,
  },
  background: {
    backgroundColor: '#f0131e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    color: "black",
  },
  button: {
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    fontWeight: 'bold',
    fontSize: 16,
    position: "absolute",
    bottom: 50,
    color: 'white'
  }
});