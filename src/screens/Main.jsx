import {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import QueryInput from '../components/QueryInput';
import DisplayResponses from '../components/DisplayResponses';
import {useDispatch, useSelector} from 'react-redux';
import {responseActions} from '../store';
import {database} from '../utils/firebase';
import {ref, get, child} from 'firebase/database';

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `/${user}`)).then(snapshot => {
      if (snapshot.exists()) {
        dispatch(
          responseActions.getResponsesFromDatabase(snapshot.val().userData),
        );
      }
      dispatch(responseActions.getUserData(false));
    });
  }, []);
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      }}>
      <ImageBackground
        source={require('../../assets/images/backgroundImage.png')}
        style={styles.image}
      />
      <View style={styles.appContainer}>
        <DisplayResponses />
        <QueryInput />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Main;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    position: 'absolute',
  },
});
