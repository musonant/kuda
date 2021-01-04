import { StyleSheet } from 'react-native';
import { colors } from '../../styles/variables';

export default StyleSheet.create({
  nextButton: {
    marginRight: 15,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 15,
  },
  hintText: {
    fontSize: 14,
    fontWeight: '600',
  },
  greenHint: {
    color: colors.green,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    padding: 10,
    marginVertical: 20,
  },
  bottomSpacing: {
    marginBottom: 40,
  },
});
