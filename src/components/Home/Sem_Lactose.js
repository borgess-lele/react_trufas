import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import api from "../../plugins/api";

export default function Sem_Lactose() {
  const [sem_lactose, setSem_Lactose] = useState([]);

  useEffect(() => {
    async function carregarSem_Lactose() {
      const response = await api.get("sem_lactose");
      setSem_Lactose(response.data);
    }
    carregarSem_Lactose();
  }, []);

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
        {sem_lactose.map((sem_lactose) => (
          <TouchableOpacity key={sem_lactose.id} style={styles.item}>
            <Image source={{ uri: sem_lactose.image }} style={styles.imagem} />
            <Text style={styles.sem_lactoseTitulo}>{sem_lactose.title}</Text>
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
