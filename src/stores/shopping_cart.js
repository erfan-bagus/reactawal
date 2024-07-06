import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   item:[]
}

export const shopping_cartSlice = createSlice({
    name:"shopping_cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            console.log(action)
            let item = state.item.find(item=>item.id==action.payload.id);
            if(item){
                if(action.payload.qty==0){
                    let indItem = state.item.findIndex(item=>item.id==action.payload.id);
                    state.item.splice(indItem,1);
                }else{

                    item.qty = action.payload.qty;
                }

            }else{
                if(action.payload.qty>0){
                    state.item.push(action.payload)
                }
            }
            // console.log(state,action);
            
            // this.setState(prefState=>console.log(prefState));
            // console.log(state.item)
            // state.item=[...state.item,action.payload.item];
            // state.format=action.payload.format
            // state.rawdata = action.payload.rawdata
        }
    }
})
export const {addItem} =shopping_cartSlice.actions
export default shopping_cartSlice.reducer