
import CCard from "../components/CCard";

function Home(params) {
    var data = [{
        id:0,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1XYSSNFpQxuc-OYRru-OUegkn6vwWw31_A&s",
        nama:"Buah Buahan",
        desc:"Buah buahan segar di ambil langsung dari petani. Buah buahan segar di ambil langsung dari petani. ",
        harga:15000
    },
    {
        id:1,
        img:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-3164270/indomie_sembako-paket-jumbo-3_full02.jpg",
        nama:"Sembako",
        desc:"Sembako dari suplier langsung harga murah",
        harga:35000
    },
    {
        id:2,
        img:"https://piorder.com/wp-content/uploads/2022/09/712t7y9VZEL.jpg",
        nama:"Snak",
        desc:"Snak enak dengan citarasa unik",
        harga:5000
    }]
    // function ritem(){
    //     var ritems=[];
    //     for(let item of data){
    //         ritems.push(<CCard dtitem={item}></CCard>)
    //     }
    //     return ritems;
    // }
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <div  className="d-flex citems align-items-strech">
                {/* {ritem()} */}
            {data.map((itm,i)=>{
                return <CCard key={i} dtitem={itm}></CCard>
            })}
            </div>
        </div>
        
    );
}

export default Home;