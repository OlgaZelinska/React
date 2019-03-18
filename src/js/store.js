import {createStore} from 'redux';
export const initialState = {
    category: null,
    price: {min:0, max: Infinity},
    order: 'default',
    dataBasket: [ ],
    data: [
        {
            id: 1,
            title: 'Груша',
            description: 'Груша отличается своей питательностью, что в комбинации с достаточно небольшой калорийностью (в 100г содержится около 50ккал) делает ее одним из наиболее желанных и полезных фруктов.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWjxZIMWtrDHpiCs9SoD2GaLd2oHMPjp9KeNL0hoodgpW60Op',
            category: 'Note',
            categoryId: 1,
            price: '1000'
        },
        {
            id: 2,
            title: 'Lorem',
            description: 'Lorem',
            img: 'src',
            category: 'Note3',
            categoryId: 3,
            price: 100
        },
        {
            id: 3,
            title: 'Lorem',
            description: 'Lorem',
            img: 'src',
            category: 'Note2',
            categoryId: 2,
            price: 200
        },
        {
            id: 4,
            title: 'Lorem',
            description: 'Lorem',
            img: 'src',
            category: 'Note3',
            categoryId: 3,
            price: 1100
        },
        {
            id: 5,
            title: 'Lorem',
            description: 'Lorem',
            img: 'src',
            category: 'Note2',
            categoryId: 2,
            price: 700
        }
    ]
};

function reducer (state = initialState, action) {
    console.log(action);
    if(action.type === 'CHANGE_CATEGORY') {
        return {...state, category: action.payload}
    } else if(action.type === 'CHANGE_PRICE') {
        return {...state, price: action.payload}
    }else if(action.type === 'CHANGE_SORT') {
        return {...state, order: action.payload}
    }else if(action.type === 'CHANGE_BASKET') {
        let { id } = action;
        const index = state.dataBasket.findIndex((item) => id === item.id);
        if (index === -1) {
            return {...state, dataBasket: [...state.dataBasket, {id, count: 1}]}
        } else {
            let arr = [...state.dataBasket]
            arr[index].count++;
            return {...state, dataBasket: [...arr]}
        }
    }else {
        return {...state}
    }
}

const store = createStore(reducer);
console.log(store.getState())

export default store;