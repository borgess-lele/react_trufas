import React, { useState } from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';
import { useSetRecoilState } from 'recoil';
import loginApi from '../../services/login';
import { userState } from '../../recoil/atoms/auth';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const setUser = useSetRecoilState(userState);

  const login = async () => {
    try {
      const data = await loginApi.login(username, password);
      setUser({
        loggedIn: true,
        access: data.access,
        refresh: data.refresh,
      });
      setUsername('');
      setPassword('');
      setErrorMsg(null);
      // await SecureStore.setItemAsync('access', data.access);
      navigation.goBack();
    } catch (error) {
      setUser({ loggedIn: false, access: null, refresh: null });
      setErrorMsg('Usuário ou senha inválidos!');
      console.log(Platform.OS)
      await SecureStore.deleteItemAsync('access');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://img.myloview.com.br/fotomurais/icone-de-vetor-de-login-de-conta-de-pessoa-de-usuario-700-142085896.jpg',
        }}
        style={styles.logo}
      />
      <TextInput
        label="Usuário"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        underlineColor="#fff" 
        placeholderTextColor="#aaa" 
      />
      <TextInput
        label="Senha"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        underlineColor="#fff" 
        placeholderTextColor="#aaa" 
      />
      <Button
        mode="contained"
        onPress={login}
        style={styles.button}
        dark
      >
        Entrar
      </Button>
      <Text style={styles.registerText}>Sem login? Registre-se!</Text>
      <Text>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafaf9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 54,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 70,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  button: {
    marginTop: 80,
  },
  registerText: {
    fontSize: 14,
    marginTop: 24,
    color: '#888',
  },
});
