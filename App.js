import React, { useState } from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import Formulario from './components/Formulario';
import Header from './components/Header';

// COMPONENTES

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  return (
    console.log('tareas'),
    <ScrollView style={{ backgroundColor: '#1B2223', flex: 1, }}>

      <View style={styles.body}>
        <View style={styles.container}>
          <Header />

          <Formulario
            tarea={tarea}
            setTarea={setTarea}
          />

        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 35,
  },
  container: {
    width: '90%',
  },
});

export default App;
