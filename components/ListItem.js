import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Colors'
import {AntDesign} from '@expo/vector-icons'

export const ListItem = (props) => {
    return(
        <View style={styles.listItem}>
            <View style={styles.left}>
                <AntDesign name='plus' size={32} color = {colors.red}/>
                <Text>asdasdasd</Text>
            </View>  
            <View style={styles.right}>
                <AntDesign name='plus' size={32} color = {colors.red}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        padding: 3,
        backgroundColor: 'green',
        justifyContent: 'space-between',
        marginBottom: '1%',
        borderRadius: 6,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
  });
  
