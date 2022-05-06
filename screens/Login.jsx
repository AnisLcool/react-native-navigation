import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Login</Text>
      {/* <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate()}> */}
      <TouchableOpacity style={styles.btn} onPress={goToHome}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'crimson',
  },
  textStyle: {
    color: 'white',
    fontSize: 30
  },
  btn: {
    backgroundColor: 'white',
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30
  }
})