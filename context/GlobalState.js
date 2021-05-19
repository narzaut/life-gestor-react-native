import React, {useState, createContext} from 'react';

export const GlobalContext = createContext();

export const GlobalStateProvider = (props) => {
    const [listState, setListState] = useState({})
    const [modalState, setModalState] = useState(false)

    return(
        <GlobalContext.Provider value = {{ list: [listState, setListState], modal: [modalState, setModalState] }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
