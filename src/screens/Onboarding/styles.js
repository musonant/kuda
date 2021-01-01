import { StyleSheet } from 'react-native';
import { colors } from '../../styles/variables';

export default StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    height: 30,
    width: 100,
    marginTop: 10,
    marginBottom: 20,
  },
  onboardingImage: {
    width: '90%',
    flex: 1,
  },
  titleText: {
    fontWeight: '800',
    fontSize: 26,
    marginTop: 20,
    marginBottom: 25,
  },
  moreActionText: {
    fontWeight: '900',
    fontSize: 15,
    padding: 5,
    marginBottom: 25,
    marginTop: 25,
  },
  green: {
    color: colors.green,
  },
  actionButton: {
    marginHorizontal: 20,
  },
});
