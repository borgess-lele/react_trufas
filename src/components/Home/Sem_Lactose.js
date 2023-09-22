import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Button, List} from 'react-native-paper';


import sem_lactoseService from "../../services/sem_lactose";
export default function Sem_Lactose() {
  const [sem_lactoses, setSem_Lactoses] = useState([]);

  const getSem_Lactoses = async () => {
    const data = await sem_lactoseService.getAllSem_Lactoses();
    setSem_Lactoses(data);
  };

  useEffect(async () => {
    getSem_Lactoses();
  }, []);

  const updateSem_Lactoses = async () => {
    await getSem_Lactoses();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Sem Lactose</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        {sem_lactoses.map((sem_lactose) => (
          <TouchableOpacity key={sem_lactose.id} style={styles.item}>
            <Image source={{ uri: sem_lactose.capa.url}} style={styles.imagem} />
            <Text style={styles.nome}>{sem_lactose.capa.description}</Text>
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
