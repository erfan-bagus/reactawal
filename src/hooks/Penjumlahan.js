// import { useState } from "react";


import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../stores/shopping_cart";

export function Nilai(initNilai=0){
  const [nil,setnil] = useState(initNilai);
  function getNilai(){
      return nil;
  }
  function setNilai(nilai){
    setnil(nilai)
      return nil;
  }
  function Tambah(nilai){
    setnil(nil+nilai)
      return nil;
  }
  function Kurang(nilai) {
    setnil(nil-nilai)
      return nil;
  }            
  return nil;
}



export function Penjumlahan (props){
    const [jmlitem,setJmlitem] = useState(0);
    const dispatch = useDispatch();

    useEffect(()=>{
    if(jmlitem<0){
        setJmlitem(0);
        // icard.current.classList.add('quake');
        setTimeout(() => {
        // icard.current.classList.remove('quake');
        }, 500);
    }else{
     
      dispatch(addItem({id:props.idItem,nama:props.nmItem,hrg:props.hrgItem,qty:jmlitem}))
      
    }

    },[jmlitem])

    return (
        <div className='row'>
          <div className='col' style={{display: "flex",justifyContent: "center"}}>
            <Button variant="primary" onClick={()=>{setJmlitem(jmlitem-1)}}>-</Button>
            <input onClick={(e)=>{e.target.select()}} onChange={(e)=>e.target.value==""?setJmlitem(0):setJmlitem(parseInt(e.target.value))}  value={jmlitem} type='number' style={{textAlign:"center",width: "70%",margin: "0px 5px",borderRadius: "5px",outline: "none",border: "1px solid #8f8f8f"}}/>
            <Button variant="primary" onClick={()=>{setJmlitem(jmlitem+1)}}>+</Button>
          </div>
        </div>
    );
}