import React, {useContext} from 'react';
import { FlatList, StyleSheet, Text, View, Modal} from 'react-native';
import colors from '../Colors'
import {GlobalContext} from '../context/GlobalState'
import {AntDesign} from '@expo/vector-icons'
import tempData from '../tempData'
import {TodoList} from './TodoList'
import { AddTaskModal } from './AddTaskModal'
export const Home = (props) => {
  const { modal, list } = useContext(GlobalContext)
  const [modalState, setModalState] = modal
  const [listState, setListState] = list
    
    return(
        <View style={styles.container}>
          <Modal
              animationType='slide'
              visible={modalState}
              onRequestClose={() => setModalState(!modalState)}
          >       
            <AddTaskModal list = {listState} closeModal={() => setModalState(!modalState)}/>   
          </Modal>
          <View>
            <Text style={styles.title}>Life Gestor App</Text>
          </View>
          <View style = {styles.addList}>
            <AntDesign name='plus' size={32} color = {colors.red}/>
          </View>
          <Text>Agregar lista</Text>
          <View style = {{height: 275, paddingLeft: 32, marginTop: 16}}>
            <FlatList
              data = {tempData}
              keyExtractor = {item => item.name}
              horizontal = {true}
              showsHorizontalScrollIndicator= {false}
              renderItem = {({item}) => (<TodoList list={item} />)}
            />
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
        marginVertical: '5%',
      }, 
      addList: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.red,
      }
  });
  
