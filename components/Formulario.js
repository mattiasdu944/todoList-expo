import React, {useState} from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, TextInput } from "react-native";
import Buttons from './Buttons';

const Formulario = () => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');


    const handleSubmit = () => {
        if(titulo.trim() === '') {
            alert('El titulo es requerido');
            return;
        }

        
        
        setTitulo('');
        setDescripcion('');
    }



    return (
        <>
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Ingresa el titulo"
                placeholderTextColor={'#608385'}
                value={titulo}
                onChangeText={(text) => setTitulo(text)}
                />
            <TextInput
                style={styles.input}
                placeholder="Descripcion (opcional)"
                placeholderTextColor={'#608385'}
                value={descripcion}
                onChangeText={(text) => setDescripcion(text)}
                multiline
                />
        </View>
        <Buttons 
            title="Agregar"
            bgColor="#00c8e0"
            onPress={() => handleSubmit()}
        />
        </>
        
    )
}

export default Formulario

const styles = StyleSheet.create({
    form: {
        borderRadius: 5,
        paddingVertical: 20,
        backgroundColor: '#F4FEFD',
        marginVertical: 10,
        width: '100%',
    },
    input: {
        paddingHorizontal: 25,
        fontSize: 16,
        height: 70,
        color: '#1B2223',
    }
});