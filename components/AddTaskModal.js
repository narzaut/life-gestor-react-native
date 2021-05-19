import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../Colors'
import {AntDesign} from '@expo/vector-icons'
import {ListItem} from './ListItem'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'react-native-elements';

export const AddTaskModal = (props) => {
  return(
    <View style={styles.modalStyle}>
      <View style={styles.controlBar}>
        <AntDesign name='plus' size={32} color = {colors.red}/>
        <AntDesign name='plus' size={32} color = {colors.red}/>
      </View>
      <View style={styles.listNameContainer}>
        <Text style={styles.listName}>{props.list.name}</Text>
      </View>
      <View style={styles.itemList}>
        <ListItem />
        <ListItem />
        <ListItem />
        <View style={styles.addTaskButton}>
          <Button
            icon={
              <AntDesign name='plus' size={20} color = {colors.white}/>

            }
            title="Agregar tarea"
            titleStyle={{fontSize: 15}}
            type="outline"
            containerStyle={{width: '80%'}}
            buttonStyle= {{borderWidth: 2,borderColor: 'red', padding: 2}}
          />
          
        </View>
      </View>
    </View>
	)
}


const styles = StyleSheet.create({
    modalStyle: {
      flex: 1,
      backgroundColor: "blue",
    },
    controlBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      backgroundColor: 'pink'
    },
    listNameContainer: {
      backgroundColor: 'red',
      paddingVertical: '3%',
    },
    listName: {
      fontSize: 20,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    itemList: {
      flex: 1,
      backgroundColor: 'purple',
      margin: '4%',
    },
    addTaskButton: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: 10,
    }

  });
  
