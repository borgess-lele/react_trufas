import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import Endereco from '../../components/Home/Endereco';
import Input from '../../components/Input';
import CupomDesconto from '../../components/Home/CupomDesconto';
import Sugestoes from '../../components/Home/Sugestoes';
import Promocoes from '../../components/Home/Promocoes';
import Trufa from '../../components/Home/Trufa';


export default function Home({navigation}) {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Endereco />
      <Input placeholder="Busque por item ou loja" />
     
      <CupomDesconto />
      <Sugestoes />
      <Promocoes />
      <Trufa navigation={navigation}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCFF',
  },
});