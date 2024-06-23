import { useState,useEffect, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits:0
})
function CCard(props) {
  const [jmlitem,setJmlitem] = useState(0);
  const cardref = useRef(null);
  useEffect(()=>{
      if(jmlitem<0 || jmlitem==""){
        setJmlitem(parseInt(0));
      }else if(jmlitem=="."){
        setJmlitem(jmlitem);
      }
  },[jmlitem])

  function calculate(num){
    let isjml = jmlitem+num;
    setJmlitem(isjml);
    if(isjml<0){
      cardref.current.classList.add("quake");
      setTimeout(() => {
        cardref.current.classList.remove("quake");
      }, 500);
    }
    
  }
  return (
    <Card ref={cardref} style={{ width: '18rem' }}>
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
            <Button variant="primary" onClick={()=>{calculate(-1)}}>-</Button>
            <input onClick={(e)=>e.target.select()} onChange={(e)=>e.target.value==""||e.target.value=="e"?setJmlitem(0):setJmlitem(parseInt(e.target.value))} value={parseInt(jmlitem)} type='number' style={{textAlign:"center",width: "70%",margin: "0px 5px",borderRadius: "5px",outline: "none",border: "1px solid #8f8f8f"}}/>
            <Button variant="primary" onClick={()=>{calculate(1)}}>+</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CCard;