import {StyleSheet, Text, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import TextView from '../components/TextView';
import {useDispatch} from 'react-redux';
import {responseActions} from '../store';
import {useEffect, useState} from 'react';
import SecretCodeScreen from '../components/SecretCodeScreen';
import {generateText} from '../models/Palm';

export default function StartUpScreen({navigation}) {
  const dispatch = useDispatch();
  const [tellMeSomething, setTellMeSomething] = useState('...');
  dispatch(responseActions.getUserData(true));
  const [modalIsVisible, setModalIsVisible] = useState(false);

  async function getResponse() {
    setTellMeSomething(await generateText('Tell me something interesting'));
  }
  useEffect(() => {
    getResponse();
  }, []);

  function stopAddGoalHandler() {
    setModalIsVisible(false);
  }
  return (
    <View>
      <SecretCodeScreen
        visible={modalIsVisible}
        onCancel={stopAddGoalHandler}
      />
      <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
        <View style={styles.me}>
          <TextView>Hi</TextView>
        </View>
        <View style={styles.bot}>
          <TextView>Hi sweety!</TextView>
        </View>
        <View style={styles.me}>
          <TextView>Tell me something interesting</TextView>
        </View>
        <View style={styles.bot}>
          <TextView>{tellMeSomething}</TextView>
        </View>
        <PrimaryButton
          onPressablePress={() => {
            navigation.navigate('Home');
          }}>
          Try as Guest
        </PrimaryButton>
        <PrimaryButton
          onPressablePress={() => {
            setModalIsVisible(true);
          }}>
          Know your secret code
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  me: {
    alignSelf: 'flex-end',
  },
  bot: {
    alignSelf: 'flex-start',
  },
  enterChat: {
    alignSelf: 'center',
  },
});
