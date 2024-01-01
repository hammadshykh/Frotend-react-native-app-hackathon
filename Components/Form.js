import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');

  const handleDonation = () => {
    // Handle donation submission or API call here
    console.log(`Thank you, ${donorName}, for donating $${donationAmount}!`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Full Name"
        value={donorName}
        onChangeText={text => setDonorName(text)}
        style={styles.input}
      />
      <TextInput
        label="Donation Amount ($)"
        value={donationAmount}
        onChangeText={text => setDonationAmount(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleDonation} style={styles.button}>
        Donate
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default DonationForm;
