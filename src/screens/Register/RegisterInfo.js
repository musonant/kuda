import React, { useEffect } from 'react';
import { useState, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import DatePicker from 'react-native-datepicker';

import Button from '../../components/Button';
import SelectionGroup from '../../components/SelectionGroup';
import styles from './styles';

const RegisterInfo = ({ navigation }) => {
  const [canProceed, setCanProceed] = useState(false);
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('RegisterNames')}
          title="Next"
          type={canProceed ? 'inline' : 'inline-disabled'}
          disabled={!canProceed}
          containerStyle={styles.nextButton}
        />
      ),
    });
  }, [navigation, canProceed]);

  useEffect(() => {
    const checkValidity = () => {
      if (!!dob && !!gender && !canProceed) {
        setCanProceed(true);
      }
    };
    checkValidity();
  }, [dob, gender, canProceed]);

  return (
    <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>A Bit More About You</Text>
        <Text style={[styles.bodyText, styles.bottomSpacing]}>
          We'll love to know you better.
        </Text>
        <SelectionGroup
          selectedValue={gender}
          onChange={setGender}
          options={[{ value: 'Male' }, { value: 'Female' }]}
        />
        <DatePicker
          style={{
            width: '100%',
            height: 60,
            marginTop: 30,
          }}
          placeholder="Date Of Birth"
          showIcon={false}
          date={dob}
          mode="date"
          format="DD/MM/YYYY"
          confirmBtnText="Done"
          cancelBtnText="Cancel"
          customStyles={{
            placeholderText: {
              fontSize: 19,
            },
            dateInput: {
              backgroundColor: '#f4f4f4',
              borderRadius: 5,
              marginVertical: 5,
              borderWidth: 0,
              height: 60,
            },
            dateText: {
              fontSize: 19,
            },
          }}
          onDateChange={(date) => setDob(date)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterInfo;
