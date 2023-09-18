import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Text, Button, List } from 'react-native-paper';


import comboService from "../../services/combo";

export default function Combo() {
  const [combos, setCombos] = useState([]);

  const getCombos = async () => {
    const data = await comboService.getAllCombos();
    setCombos(data);
  };

  useEffect(async () => {
    getCombos();
  }, []);

  const updateCombos = async () => {
    await getCombos();
  };

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
        {combos.map((combo) => (
          <TouchableOpacity key={combo.id} style={styles.item}>
            <Image
              source={{ uri: combo.capa.url }} 
              style={styles.imagem}
            />
            <Text style={styles.nome}>{combo.capa.description}</Text>
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
    fontWeight: "bold",
  },
  lista: {
    marginTop: 10,
    paddingLeft: 20,
  },
  item: {
    marginRight: 15,
    alignItems: "center",
  },
  imagem: {
    width: 200,
    height: 120,
    borderRadius: 10,
  },
  categoriaTitulo: {
    fontSize: 16,
    marginTop: 10,
    color: "#999",
  },
});
