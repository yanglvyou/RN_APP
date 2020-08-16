import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Introduction = () => {
  const {introduction} = useSelector(({album}) => album);
  return (
    <View style={styles.container}>
      <Text style={styles.introduction}>{introduction}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  introduction: {
    fontSize: 16,
  },
});

export default Introduction;
