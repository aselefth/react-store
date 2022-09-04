import { createSlice } from "@reduxjs/toolkit";
import {v4} from 'uuid'

export const itemsSlice = createSlice({
    name: 'itemsSlice',
    initialState: {
        items: [
            {
                name: 'велосипед', 
                id: v4(), 
                price: '5000', 
                selected: false,
                category: 'все транспорт',
                imgLink: 'https://www.desporte.ru/upload/medialibrary/fba/fba8808367971de5bce3f75967fb5dff.jpg',
                more: false,
                info: 'велосипед с алюминиевой рамой'
            }, 
            {
                name: 'iphone', 
                id: v4(), 
                price: '4000', 
                selected: false,
                category: 'все техника',
                imgLink: 'https://iphoriya.ru/wp-content/uploads/iphone-11-purple.jpg',
                more: false,
                info: 'айфон 11 новый'
            },
            {
                name: 'морская свинка',
                id: v4(),
                price: '1000',
                selected: false,
                category: 'все животные',
                imgLink: 'https://sun9-78.userapi.com/impg/bi_i-2IIqsi7ItSXLx-TopvtDORlpWmMHye-Mg/kuhgYwIgqjI.jpg?size=1200x1072&quality=96&sign=1096e57100e07c1889cff3a40b676603&c_uniq_tag=TOAfHi_CECTIBbsrBOP7_F00KKUfHcMt4RaS103jkYE&type=album',
                more: false,
                info: 'морская свинка готова стать вам отличным другом!'
            }
        ],
        category: 'все'
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push({
                name: action.payload.name,
                id: v4(),
                price: action.payload.price,
                selected: false,
                category: `все ${action.payload.category == 'все' ? '' : action.payload.category}`,
                imgLink: action.payload.imgLink,
                more: false,
                info: action.payload.info
            })
            console.log(state.items[state.items.length - 1].category)
        },
        toggleSelectedItem: (state, action) => {
            const item = state.items.find(item => item.id == action.payload.id);
            if (item)
            item.selected = !item.selected;
        },
        changeCategory: (state, action) => {
            state.category = action.payload.category;
        },
        checkMore: (state, action) => {
            const item = state.items.find(item => item.id == action.payload.id);
            if (item)
            item.more = !item.more;
        }
    }
})

export const {addItem, toggleSelectedItem, changeCategory, checkMore} = itemsSlice.actions;
export default itemsSlice.reducer; 