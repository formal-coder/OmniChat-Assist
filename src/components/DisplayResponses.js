import {StyleSheet, FlatList, View} from 'react-native';
import Response from './Response';
import {useSelector} from 'react-redux';

export default function DisplayResponses() {
  const responses = useSelector(state => state.userData);
  const isFetchingData = useSelector(state => state.isFetchingData);
  // console.log(responses);
  return (
    <>
      <FlatList
        style={styles.responseContainer}
        data={responses}
        renderItem={res => (
          <Response
            user={res.item.You}
            bot={res.item.Bot}
            id={res.item.id}
            model={res.item.Model}
          />
        )}
        keyExtractor={item => item.id}
        inverted={true}
      />
      {isFetchingData && (
        <View style={styles.responseContainer}>
          <Response
            user={'Fetching data...'}
            bot={'Fetching data...'}
            id={'Fetching data...'}
            model={'Fetching data...'}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  responseContainer: {
    width: '95%',
  },
});
