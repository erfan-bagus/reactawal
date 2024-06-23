import { useState,useEffect, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits:0
})
function CCard(props) {
  const [jmlitem,setJmlitem] = useState(0);
  const icard = useRef(null);
  useEffect(()=>{
    if(jmlitem<0){
      setJmlitem(0);
      icard.current.classList.add('quake');
      setTimeout(() => {
        icard.current.classList.remove('quake');
      }, 500);
    }

  },[jmlitem])

  
  return (
    <Card ref={icard} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.dtitem.img} />
      <Card.Body>
        <Card.Title>{props.dtitem.nama}</Card.Title>
        <Card.Text>
        {props.dtitem.desc}
        </Card.Text>
        <Card.Text>
        {formatter.format(props.dtitem.harga)}
        </Card.Text>
        <div className='row'>
          <div className='col' style={{display: "flex",justifyContent: "center"}}>
            <Button variant="primary" onClick={()=>{setJmlitem(jmlitem-1)}}>-</Button>
            <input onClick={(e)=>{e.target.select()}} onChange={(e)=>e.target.value==""?setJmlitem(0):setJmlitem(parseInt(e.target.value))}  value={jmlitem} type='number' style={{textAlign:"center",width: "70%",margin: "0px 5px",borderRadius: "5px",outline: "none",border: "1px solid #8f8f8f"}}/>
            <Button variant="primary" onClick={()=>{setJmlitem(jmlitem+1)}}>+</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CCard;