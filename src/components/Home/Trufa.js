import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Text, Button, List } from 'react-native-paper';


import trufaService from "../../services/trufa";

export default function Trufa() {
  const [trufas, setTrufas] = useState([]);

  const getTrufas = async () => {
    const data = await trufaService.getAllTrufas();
    setTrufas(data);
  };

  useEffect(async () => {
    getTrufas();
  }, []);

  const updateTrufas = async () => {
    await getTrufas();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Trufas</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        {trufas.map((trufa) => (
          <TouchableOpacity key={trufa.id} style={styles.item}>
            <Image
              source={{ uri: trufa.capa.url }} 
              style={styles.imagem}
            />
            <Text style={styles.nome}>{trufa.capa.description}</Text>
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
