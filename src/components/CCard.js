import { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { Nilai, Penjumlahan } from '../hooks/Penjumlahan';
import FormatNumber from '../hooks/FormatNumber';


function CCard(props) {
  // const [jmlitem,setJmlitem] = useState(0);
  // const nilai = Nilai(0);
  const icard = useRef(null);
  
  // useEffect(()=>{
    // if(jmlitem<0){
      // setJmlitem(0);
      // icard.current.classList.add('quake');
      // setTimeout(() => {
        // icard.current.classList.remove('quake');
      // }, 500);
    // }

  // },[nilai])

  
  return (
    
    <Card ref={icard} style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src={props.dtitem.img} />
      <Card.Body>
        <Card.Title>{props.dtitem.nama}</Card.Title>
        <Card.Text>
        {props.dtitem.desc}
        </Card.Text>
        <Card.Text >
        {FormatNumber(props.dtitem.harga)}
        </Card.Text>
        <Penjumlahan idItem={props.dtitem.id} nmItem={props.dtitem.nama} hrgItem={props.dtitem.harga}/>
      </Card.Body>
    </Card>
  );
}

export default CCard;