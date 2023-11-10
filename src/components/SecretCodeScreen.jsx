import {View, Modal, ScrollView, StyleSheet, TextInput} from 'react-native';
import React, {useRef} from 'react';
import PrimaryButton from './PrimaryButton';

export default function SecretCodeScreen({visible, onCancel}) {
  const UserCodeValidation = () => {
    console.log('Validate user based on 4 digit code');
  };
  const userRef = useRef('default');
  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.editModalContainer}>
          <TextInput
            placeholder="Secret code"
            style={styles.textInput}
            ref={userRef}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPressablePress={() => {
                console.log('Login');
              }}>
              Enter chat
            </PrimaryButton>
            <PrimaryButton onPressablePress={onCancel}>Cancel</PrimaryButton>
          </View>
          <PrimaryButton
            onPressablePress={() => {
              UserCodeValidation();
            }}>
            Generate code
          </PrimaryButton>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  editModalContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d000',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    paddingHorizontal: 20,
  },
});
