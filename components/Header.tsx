import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
   title: string;
}

const Header = ({ title }: Props) => {
   return (
      <View style={styles.header}>
         <Text style={styles.headerTitle}>{title}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   header: {
      width: '100%',
      height: 80,
      paddingTop: 26,
      backgroundColor: '#f7287b',
      alignItems: 'center',
      justifyContent: 'center',
   },
   headerTitle: {
      color: 'black',
      fontSize: 18,
   },
});

export default Header;
