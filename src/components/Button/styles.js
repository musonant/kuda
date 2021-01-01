import { StyleSheet } from 'react-native';
import { colors } from '../../styles/variables';

export default StyleSheet.create({
  mainContainer: {
    alignSelf: 'stretch',
    backgroundColor: colors.primaryPurple,
    borderRadius: 5,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
