import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormatNumber from "../hooks/FormatNumber";

function Cart(){
    const cart = useSelector(state=>state.shopping_cart);
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        let hrgTotal=0;
        for(let it of cart.item){
            hrgTotal+=it.qty*it.hrg;
        }
        setTotal(hrgTotal)
    },[])
    // console.log()
    return(
            <div className="container">
                <Table striped bordered hover style={{border:"1px solid"}}>
                    <thead>
                        <tr>
                        <th>NO</th>
                        <th>Nama Barang</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.item.map((it,i)=>{
                            let subTotal = it.hrg*it.qty;
                          
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{it.nama}</td>
                                    <td>{FormatNumber(it.hrg)}</td>
                                    <td>{it.qty}</td>
                                    <td>{FormatNumber(subTotal)}</td>
                                </tr>
                            );
                        })}
                        {/* <tr>
                            <td>1</td>
                            <td>Buah Buahan</td>
                            <td>15.000</td>
                            <td>2</td>
                            <td>30.000</td>
                        </tr> */}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colSpan={4} className="text-center">Total</th>
                        <th>{FormatNumber(total)}</th>
                    </tr>
                    </tfoot>
                    </Table>
            </div>
        );
    
}

export default Cart;