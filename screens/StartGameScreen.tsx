import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {}

const StartGameScreen = ({}: Props) => {
   return (
      <View style={styles.screen}>
         <Text style={styles.title}>El juego de pantalla</Text>
         <View style={styles.inputContainer}>
            <Text>Selecciona un numero</Text>
            <TextInput />
            <View style={styles.buttonContainer}>
               <Button title={'Reniciar'} onPress={() => {}} />
               <Button title={'Confirmar'} onPress={() => {}} />
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
   },
   title: {
      fontSize: 20,
      marginVertical: 10,
   },
   inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
   },
   buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
   },
});

export default StartGameScreen;
