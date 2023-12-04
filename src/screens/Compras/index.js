import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

export default function Compras({ navigation }) {
    const [quantidade, setQuantidade] = useState(1);
    const precoUnitario = 10; // Substitua pelo preço real do seu produto

    const calcularTotal = () => {
        return quantidade * precoUnitario;
    };

    const handleComprar = () => {
        // Adicione aqui a lógica para processar a compra
        console.log(`Compra realizada! Quantidade: ${quantidade}, Total: ${calcularTotal()}`);
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'URL_DA_SUA_IMAGEM' }}
                style={styles.imagem}
            />
            <Text style={styles.texto}>Quantidade:</Text>
            <TextInput
                style={styles.inputQuantidade}
                value={quantidade.toString()}
                keyboardType="numeric"
                onChangeText={(text) => setQuantidade(parseInt(text) || 0)}
            />
            <Text style={styles.texto}>Preço unitário: R${precoUnitario.toFixed(2)}</Text>
            <Text style={styles.texto}>Total: R${calcularTotal().toFixed(2)}</Text>
            <Button
                title="Comprar"
                onPress={handleComprar}
                color="black" // Definindo a cor do botão para preto
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCFF', // Roxo
        padding: 20,
    },
    imagem: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    inputQuantidade: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        width: 100,
        color: 'black', // Texto em preto
    },
    texto: {
        color: 'black', // Texto em preto
        marginBottom: 10,
    },
});
