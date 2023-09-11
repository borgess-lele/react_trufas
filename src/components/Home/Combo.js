import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import api from '../../services/api';

export default function Combo() {
  const [combo, setCombo] = useState([]);

  useEffect(() => {
    async function carregarCombo() {
      const response = await api.get('combos');
      setCombo(response.data);
    }
    carregarCombo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Combos</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        {combo.map((combo) => (
          <TouchableOpacity key={combo.id} style={styles.item}>
            <Image
              source={{ uri: combo.image }} 
              style={styles.imagem}
            />
            <Text style={styles.comboTitulo}>{combo.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 0,
  },
  header: {
    marginLeft: 20,
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  lista: {
    marginTop: 10,
    paddingLeft: 20,
  },
  item: {
    marginRight: 15,
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 120,
    borderRadius: 10,
  },
  categoriaTitulo: {
    fontSize: 16,
    marginTop: 10,
    color: '#999',
  },
});