import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Pressable,
  Clipboard,
} from 'react-native';
import PrimaryButton from './PrimaryButton';
import {useDispatch} from 'react-redux';
import {responseActions} from '../store';
import EditModal from './EditModal';
import {useState} from 'react';

const Response = ({user, bot, id, model}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const dispatch = useDispatch();
  const onEditHandler = () => {
    setModalIsVisible(true);
  };

  const onDeleteHandler = () => {
    dispatch(responseActions.removeResponse(id));
  };

  function startAddGoalHandler() {}

  function stopAddGoalHandler() {
    setModalIsVisible(false);
  }
  return (
    <View style={styles.responseContainer}>
      <EditModal
        visible={modalIsVisible}
        onCancel={stopAddGoalHandler}
        id={id}
        user={user}
        bot={bot}
        model={model}
      />
      <View style={styles.response}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.userText}>{user}</Text>
          <PrimaryButton onPressablePress={onEditHandler}>Edit</PrimaryButton>
          <PrimaryButton onPressablePress={onDeleteHandler}>
            Delete
          </PrimaryButton>
        </View>
        <Pressable
          onLongPress={() => {
            Clipboard.setString(bot);
            ToastAndroid.show('Text copied to clipboard!', ToastAndroid.SHORT);
          }}>
          <Text style={styles.botText}>{bot}</Text>
        </Pressable>
        <Text style={{color: 'grey'}}>by {model}</Text>
      </View>
    </View>
  );
};

export default Response;

const styles = StyleSheet.create({
  responseContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  response: {
    flex: 7,
  },
  userText: {
    fontSize: 14,
    width: '60%',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingVertical: 2,
    color: 'black',
  },
  botText: {
    fontSize: 14,
    paddingVertical: 2,
    color: 'black',
  },
});
