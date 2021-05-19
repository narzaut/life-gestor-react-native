import React, {useContext} from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import {AddTaskModal} from './AddTaskModal'
import colors from '../Colors'
import {GlobalContext} from '../context/GlobalState'

export const TodoList = (props) => {
    const { modal, list } = useContext(GlobalContext)
    const [modalState, setModalState] = modal
    const [listState, setListState] = list
    
    const onClick = () => {
        setModalState(true);
        setListState(props.list);
    }

    return(
        <TouchableOpacity onPress={() => onClick()}>
            
            <View style={[styles.listContainer, {backgroundColor: props.list.color}]}>
                <Text style={styles.listTitle} numberOfLines={2}>
                    {props.list.name}
                </Text>
            </View>
        </TouchableOpacity>   
    )
}


const styles = StyleSheet.create({
    listContainer: {
        width: 125,
        height: 200,
        borderRadius: 10,
        marginHorizontal: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,


    },
    listTitle: {
        marginHorizontal: 10,
        
    }
  });
  
