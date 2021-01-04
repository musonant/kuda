import { StyleSheet } from 'react-native';
import { colors } from '../../styles/variables';

export default StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  moreActionText: {
    fontWeight: '900',
    fontSize: 15,
    padding: 5,
    marginBottom: 25,
    marginTop: 25,
    textAlign: 'center',
  },
  green: {
    color: colors.green,
  },
  actionButton: {
    marginTop: 20,
  },
});
